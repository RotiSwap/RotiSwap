import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Card, Flex, Text, Skeleton } from '@pancakeswap/uikit'
import { DeserializedFarm } from 'state/types'
import { getBscScanLink } from 'utils'
import { useTranslation } from 'contexts/Localization'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { getAddress } from 'utils/addressHelpers'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends DeserializedFarm {
  apr?: number
  lpRewardsApr?: number
  liquidity?: BigNumber
}

const StyledCard = styled(Card)`
  align-self: baseline;
`

const FarmCardInnerContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
`

const ExpandingWrapper = styled.div`
  padding: 24px;
  border-top: 2px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
`

const StyledValue = styled(Flex)`
  background:  ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 6px 10px;
  width: 90%;
  color: ${({ theme }) => theme.colors.textSubtle};
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  displayApr: string
  removed: boolean
  cakePrice?: BigNumber
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, displayApr, removed, cakePrice, account }) => {
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const totalValueFormatted =
    farm.liquidity
      ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : ''
  
  const swapUrl = "https://rotiswap.io/swap?outputCurrency="
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : t('ROTI')
  const liquidityUrlPathParts = farm.isTokenOnly ? swapUrl+farm.token.address : getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const addLiquidityUrl =  farm.isTokenOnly ? liquidityUrlPathParts : `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const lpAddress = getAddress(farm.lpAddresses)
  const isPromotedFarm = farm.token.symbol === 'ROTI'

  return (
    <StyledCard isActive={isPromotedFarm}>
      <FarmCardInnerContainer>
        <CardHeading
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          isCommunityFarm={farm.isCommunity}
          token={farm.token}
          quoteToken={farm.quoteToken}
          isTokenOnly={farm.isTokenOnly}
        />
        <Flex mb="10px">
          {!removed && (
            <Flex justifyContent="space-between" width="50%" flexDirection="column">
              <Text>{t('ROI')}</Text>
              <Text style={{ display: 'flex', alignItems: 'center' }}>
                {farm.apr ? (
                  <StyledValue>
                    <ApyButton
                      variant="text-and-button"
                      pid={farm.pid}
                      lpSymbol={farm.lpSymbol}
                      multiplier={farm.multiplier}
                      lpLabel={lpLabel}
                      addLiquidityUrl={addLiquidityUrl}
                      cakePrice={cakePrice}
                      apr={farm.apr}
                      displayApr={displayApr}
                    />
                  </StyledValue>
                ) : (
                  <Skeleton height={24} width={80} />
                )}
              </Text>
            </Flex>
          )}
          <Flex justifyContent="space-between" width="50%" flexDirection="column">
            <Text>{t('Earn')}</Text>
            <StyledValue>{earnLabel}</StyledValue>
          </Flex>
        </Flex>
        <Flex>
          <Flex justifyContent="space-between" width="50%" flexDirection="column">
            <Text>{t('Total Liquidity')}</Text>
            {totalValueFormatted ? <StyledValue>{totalValueFormatted}</StyledValue> : <Skeleton width={75} height={25} />}
          </Flex>
          <Flex justifyContent="space-between" width="50%" flexDirection="column">
            <Text>{t('Multiplier')}</Text>
            {farm.multiplier ? <StyledValue>{farm.multiplier}</StyledValue> : <Skeleton width={75} height={25} />}
          </Flex>
        </Flex>
        {showExpandableSection && (
          <DetailsSection
            removed={removed}
            bscScanAddress={getBscScanLink(lpAddress, 'address')}
            infoAddress={`/info/pool/${lpAddress}`}
            totalValueFormatted={totalValueFormatted}
            lpLabel={lpLabel}
            addLiquidityUrl={addLiquidityUrl}
          />
        )}
        <CardActionsContainer
          farm={farm}
          lpLabel={lpLabel}
          account={account}
          cakePrice={cakePrice}
          addLiquidityUrl={addLiquidityUrl}
        />
      </FarmCardInnerContainer>
      <ExpandingWrapper>
        <ExpandableSectionButton
          onClick={() => setShowExpandableSection(!showExpandableSection)}
          expanded={showExpandableSection}
        />
      </ExpandingWrapper>
    </StyledCard>
  )
}

export default FarmCard
