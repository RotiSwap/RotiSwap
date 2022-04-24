import BigNumber from 'bignumber.js'
import masterchefABI from 'config/abi/masterchef.json'
import erc20 from 'config/abi/erc20.json'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { BIG_TEN, BIG_ZERO } from 'utils/bigNumber'
import multicall from 'utils/multicall'
import { SerializedFarm, SerializedBigNumber } from '../types'

type PublicFarmData = {
  tokenAmountTotal: SerializedBigNumber
  lpTotalInQuoteToken: SerializedBigNumber
  lpTotalSupply: SerializedBigNumber
  tokenBalance: SerializedBigNumber
  tokenPriceVsQuote: SerializedBigNumber
  poolWeight: SerializedBigNumber
  multiplier: string
}

const fetchFarm = async (farm: SerializedFarm): Promise<PublicFarmData> => {
  const { pid, lpAddresses, token, quoteToken, isTokenOnly } = farm
  const lpAddress = getAddress(lpAddresses)
  const calls = [
    // Balance of token in the LP contract
    {
      address: token.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: quoteToken.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of LP tokens in the master chef contract
    {
      address: isTokenOnly ? token.address : lpAddress,
      name: 'balanceOf',
      params: [getMasterChefAddress()],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: 'totalSupply',
    },
    // Token decimals
    {
      address: token.address,
      name: 'decimals',
    },
    // Quote token decimals
    {
      address: quoteToken.address,
      name: 'decimals',
    },
  ]

  const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
    await multicall(erc20, calls)

  let tokenAmount
  let tokenPriceVsQuote
  let lpTotalInQuoteToken
  let lpTokenRatio
  let tokenAmountTotal
  let quoteTokenAmountTotal
  let tokenAmountMc
  let quoteTokenAmountMc

  if(farm.isTokenOnly){
      tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals));
      const ratio = new BigNumber(10).pow(quoteTokenDecimals - tokenDecimals)

      if(pid === 7)
        tokenPriceVsQuote = new BigNumber(1);
      else
        tokenPriceVsQuote = new BigNumber(quoteTokenBalanceLP).div(new BigNumber(tokenBalanceLP)).div(ratio);

      lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote);
      
      tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
      // Raw amount of token in the LP, including those not staked
      tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
      quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(BIG_TEN.pow(quoteTokenDecimals))

      // Amount of token in the LP that are staked in the MC (i.e amount of token * lp ratio)
      tokenAmountMc = tokenAmountTotal.times(lpTokenRatio)
      quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio)
  }else{

      // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
      lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

      // Raw amount of token in the LP, including those not staked
      tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
      quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(BIG_TEN.pow(quoteTokenDecimals))

      // Amount of quoteToken in the LP that are staked in the MC
      quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio)

      // Total staked in LP, in quote token value
      lpTotalInQuoteToken = quoteTokenAmountMc.times(new BigNumber(2))
  }


  // Only make masterchef calls if farm has pid
  const [info, totalAllocPoint] =
    pid || pid === 0
      ? await multicall(masterchefABI, [
          {
            address: getMasterChefAddress(),
            name: 'poolInfo',
            params: [pid],
          },
          {
            address: getMasterChefAddress(),
            name: 'totalAllocPoint',
          },
        ])
      : [null, null]

  const allocPoint = info ? new BigNumber(info.allocPoint?._hex) : BIG_ZERO
  const poolWeight = totalAllocPoint ? allocPoint.div(new BigNumber(totalAllocPoint)) : BIG_ZERO

  return {
    tokenAmountTotal: tokenAmountTotal.toJSON(),
    lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
    lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
    tokenBalance: new BigNumber(lpTokenBalanceMC).toJSON(),
    tokenPriceVsQuote: quoteTokenAmountTotal.div(tokenAmountTotal).toJSON(),
    poolWeight: poolWeight.toJSON(),
    multiplier: `${allocPoint.div(100).toString()}X`,
  }
}

export default fetchFarm
