import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal, Skeleton } from '@pancakeswap/uikit'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      {!removed && (
        <StyledLinkExternal href={addLiquidityUrl} color="text">{t('Get %symbol%', { symbol: lpLabel })}</StyledLinkExternal>
      )}
      <StyledLinkExternal href={bscScanAddress} color="text">{t('View Contract')}</StyledLinkExternal>
      {/* <StyledLinkExternal href={infoAddress} color="text">{t('See Pair Info')}</StyledLinkExternal> */}
    </Wrapper>
  )
}

export default DetailsSection
