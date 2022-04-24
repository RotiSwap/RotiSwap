import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { CommunityTag, CoreTag } from 'components/Tags'
import { TokenImage, TokenPairImage } from 'components/TokenImage'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
  isTokenOnly: boolean
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, isCommunityFarm, token, quoteToken, isTokenOnly }) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      {isTokenOnly ? (
        <TokenImage token={token} height={64} width={64} mr="16px" />
      ) : (
        <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={64} height={64} />
      )}
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
