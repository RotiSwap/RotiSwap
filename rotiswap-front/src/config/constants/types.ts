import BigNumber from 'bignumber.js'
import { Token } from '@pancakeswap/sdk'

export type TranslatableText =
  | string
  | {
      key: string
      data?: {
        [key: string]: string | number
      }
    }
export interface Address {
  11?: string
  1120: string
}

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
  projectLink?: string
}

export enum PoolIds {
  poolBasic = 'poolBasic',
  poolUnlimited = 'poolUnlimited',
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native ECO behave differently than pools using a token
  'AUTO' = 'Auto',
}

interface FarmConfigBaseProps {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  multiplier?: string
  isCommunity?: boolean
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}

export interface SerializedFarmConfig extends FarmConfigBaseProps {
  token: SerializedToken
  quoteToken: SerializedToken
  isTokenOnly?: boolean
}

export interface DeserializedFarmConfig extends FarmConfigBaseProps {
  token: Token
  quoteToken: Token
  isTokenOnly?: boolean
}

interface PoolConfigBaseProps {
  sousId: number
  contractAddress: Address
  poolCategory: PoolCategory
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  enableEmergencyWithdraw?: boolean
}

export interface SerializedPoolConfig extends PoolConfigBaseProps {
  earningToken: SerializedToken
  stakingToken: SerializedToken
}

export type Images = {
  lg: string
  md: string
  sm: string
  ipfs?: string
}

export type PageMeta = {
  title: string
  description?: string
  image?: string
}
