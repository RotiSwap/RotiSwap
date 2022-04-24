import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TabMenu as UIKitTabMenu, Tab, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const TabArea = styled(Flex)`
  margin-top: 40px;
  max-width: 540px;
  width: 100%;
`

interface TabMenuProps {
  activeIndex: number
}

const TabMenu: React.FC<TabMenuProps> = ({ activeIndex }) => {
  const { t } = useTranslation()

  return (
    <TabArea>
      <UIKitTabMenu activeIndex={activeIndex}>
        <Tab scale="lg" as={Link} to="/swap">{t('Exchange')}</Tab>
        <Tab scale="lg" as={Link} to="/liquidity">{t('Liquidity')}</Tab>
      </UIKitTabMenu>
    </TabArea>
  )
}

export default TabMenu
