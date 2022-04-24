import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Flex, Text, LogoIcon } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const ComingSoon = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        <Flex>
          <Text color="white" fontSize="56px" bold>
            Roti
          </Text>
          <Text color="primary" fontSize="56px" bold>
            Swap
          </Text>
        </Flex>
        <Text mb="30px" fontSize="24px">{t('Coming Soon')}</Text>
        <Button as={Link} to="/" scale="md">
          {t('Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default ComingSoon
