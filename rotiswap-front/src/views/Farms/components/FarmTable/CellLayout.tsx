import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
`

const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
`

const Layout = styled.div<{background: boolean}>`
  width: 100%;
  height: 100%;
  background: ${({ theme, background }) => background ? theme.colors.primary : "transparent"};
  padding: 20px;
  border-radius: 10px;
  text-align-last: center;
`

interface CellLayoutProps {
  label?: string
  background?: boolean
}

const CellLayout: React.FC<CellLayoutProps> = ({ label = '', background, children }) => {
  return (
    <Layout background={background}>
      <ContentContainer>{children}</ContentContainer>
      {label && <Label>{label}</Label>}
    </Layout>
  )
}

export default CellLayout
