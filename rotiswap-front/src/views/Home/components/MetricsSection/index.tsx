import React from 'react'
import styled from 'styled-components'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import useGetTopFarmsByApr from 'views/Home/hooks/useGetTopFarmsByApr'
import useTokenBalance, { FetchStatus, useGetBnbBalance, useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd, useTotalFarmValue } from 'state/farms/hooks'
import { useMasterchef } from 'hooks/useContract'
import { harvestFarm } from 'utils/calls'
import Balance from 'components/Balance'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { getBalanceNumber, getFullDisplayBalance, formatBigNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import ConnectWalletButton from 'components/ConnectWalletButton'
import tokens from 'config/constants/tokens'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

const ContentWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 140px;
  align-items: center;
  justify-content: center;
`

const ValueWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 140px;
  align-items: center;
  justify-content: space-between;
`

const ValueArea = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  text-align: start;
`

const ValueItemArea = styled(Flex)`
  flex-direction: column;
  width: 50%;
  margin-bottom: 10px;
`

const ValueTitle = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 13px;
  font-weight: bold;
`

const Value = styled(Text)`
  color: ${({theme}) => theme.colors.text};
  font-size: 20px;
`

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const { topFarms } = useGetTopFarmsByApr(true)
  const tvlOnfarms = useTotalFarmValue()

  const { account } = useWeb3React()
  const { balance: cakeBalance, fetchStatus: cakeFetchStatus } = useTokenBalance(tokens.cake.address)

  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()

  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.cake.address))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  const masterChefContract = useMasterchef()
  const earningsBusd = new BigNumber(farmEarningsSum).multipliedBy(cakePriceBusd)
  const numTotalToCollect = farmsWithStakedBalance.length
  const numFarmsToCollect = farmsWithStakedBalance.filter((value) => value.pid !== 100).length
  const hasCakePoolToCollect = numTotalToCollect - numFarmsToCollect > 0

  const tvlString = data ? formatLocalisedCompactNumber(tvlOnfarms.toNumber()) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" width="100%">
        <IconCard>
          <ValueWrapper>
            <ValueArea mb="20px">
              <ValueItemArea>
                <ValueTitle>{t('ROTI to Harvest')}</ValueTitle>
                <Value>{t('%collect%', { collect: numTotalToCollect.toFixed(3) })}</Value>
              </ValueItemArea>
              <ValueItemArea>
                <ValueTitle>{t('ROTI to Wallet')}</ValueTitle>
                <Value>{getFullDisplayBalance(cakeBalance, 18, 3)}</Value>
              </ValueItemArea>
            </ValueArea>
            <ConnectWalletButton width="100%" />
          </ValueWrapper>
        </IconCard>
        <IconCard>
          <ValueWrapper>
            <ValueArea mb="20px">
              <ValueItemArea>
                <ValueTitle>{t('ROTI Price')}</ValueTitle>
                <Value>{t('$%price%', { price: cakePriceBusd.toFixed(3) })}</Value>
              </ValueItemArea>
              <ValueItemArea>
                <ValueTitle>{t('ROTI Market Cap')}</ValueTitle>
                <Value>{t('$%marketcap%', { marketcap: mcapString })}</Value>
              </ValueItemArea>
            </ValueArea>
            <ValueArea>
              <ValueItemArea>
                <ValueTitle>{t('ROTI in Circulation')}</ValueTitle>
                <Value>{t('%circulation%', { circulation: cakeSupply.toFixed(3) })}</Value>
              </ValueItemArea>
              <ValueItemArea>
                <ValueTitle>{t('ROTI Burned')}</ValueTitle>
                <Value>{t('%burnedamount%', { burnedamount: burnedBalance.toFixed(3) })}</Value>
              </ValueItemArea>
            </ValueArea>
          </ValueWrapper>
        </IconCard>
        <IconCard>
          <ContentWrapper>
            <Text fontSize="46px">{t('$%tvl%', { tvl: tvlString })}</Text>
            <Text color="primary" bold>{t('Total Value Locked (TVL)')}</Text>
          </ContentWrapper>
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
