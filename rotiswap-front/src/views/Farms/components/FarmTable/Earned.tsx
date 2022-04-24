import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '@pancakeswap/uikit'

export interface EarnedProps {
  earnings: number
  pid: number
}

interface EarnedPropsWithLoading extends EarnedProps {
  userDataReady: boolean
}

const Amount = styled.span<{ earned: number }>`
  color: ${({ earned, theme }) => theme.colors.textSubtle};
  display: flex;
  align-items: center;
  margin: auto;
`

const Earned: React.FunctionComponent<EarnedPropsWithLoading> = ({ earnings, userDataReady }) => {
  if (userDataReady) {
    return <Amount earned={earnings}>{earnings.toLocaleString()}</Amount>
  }
  return (
    <Amount earned={0}>
      <Skeleton width={60} />
    </Amount>
  )
}

export default Earned
