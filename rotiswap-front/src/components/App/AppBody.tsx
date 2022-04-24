import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 10px;
  border-top-left-radius: 0px;
  max-width: 540px;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.backgroundAlt3};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
