import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Text } from '@pancakeswap/uikit'
import { getAddress } from 'utils/addressHelpers'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { DeserializedFarm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import { useERC20 } from 'hooks/useContract'
import ConnectWalletButton from 'components/ConnectWalletButton'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'
import useApproveFarm from '../../hooks/useApproveFarm'

const Action = styled.div`
  padding-top: 16px;
`

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 15px;
`

export interface FarmWithStakedValue extends DeserializedFarm {
  apr?: number
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  account?: string
  addLiquidityUrl?: string
  cakePrice?: BigNumber
  lpLabel?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl, cakePrice, lpLabel }) => {
  const { t } = useTranslation()
  const { toastError } = useToast()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses, token } = farm
  const { allowance, tokenBalance, stakedBalance, earnings } = farm.userData || {}
  
  const lpAddress = getAddress(lpAddresses)
  const tokenAddress = token.address
  const stakeAddress = farm.isTokenOnly ? tokenAddress : lpAddress
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const dispatch = useAppDispatch()

  const lpContract = useERC20(stakeAddress)

  const { onApprove } = useApproveFarm(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
    } catch (e) {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      console.error(e)
    } finally {
      setRequestedApproval(false)
    }
  }, [onApprove, dispatch, account, pid, t, toastError])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={farm.lpSymbol}
        decimals={farm.token.decimals}
        pid={pid}
        apr={farm.apr}
        lpLabel={lpLabel}
        cakePrice={cakePrice}
        addLiquidityUrl={addLiquidityUrl}
        isTokenOnly={farm.isTokenOnly}
      />
    ) : (
      <Button mt="10px" width="200px" disabled={requestedApproval} onClick={handleApprove} variant="secondary">
        {t('Enable Contract')}
      </Button>
    )
  }

  return (
    <Action>
      <StyledFlex mb="15px">
        <Flex mb="10px">
          <Text bold textTransform="uppercase" color="text" fontSize="14px" pr="4px">
            ROTI
          </Text>
          <Text bold textTransform="uppercase" color="text" fontSize="14px">
            {t('Earned')}
          </Text>
        </Flex>
        <HarvestAction earnings={earnings} pid={pid} />
      </StyledFlex>
      <StyledFlex>
        <Flex>
          <Text bold textTransform="uppercase" color="text" fontSize="14px" pr="4px">
            {farm.lpSymbol}
          </Text>
          <Text bold textTransform="uppercase" color="text" fontSize="14px">
            {t('Staked')}
          </Text>
        </Flex>
        {!account ? <ConnectWalletButton mt="10px" width="200px" variant="secondary" /> : renderApprovalOrStakeButton()}
      </StyledFlex>
    </Action>
  )
}

export default CardActions
