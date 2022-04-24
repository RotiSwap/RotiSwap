import { ChainId } from '@pancakeswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://rpc.ecochain.network',
  [ChainId.TESTNET]: 'https://rpc-ecochain.antify.org',
}

export default NETWORK_URLS
