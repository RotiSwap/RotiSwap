import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'RotiSwap',
  description:
    'The most popular AMM on BSC by user count! Earn ROTI through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by RotiSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://rotiswap.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('RotiSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('RotiSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('RotiSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('RotiSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('RotiSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('RotiSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('RotiSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('RotiSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('RotiSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('RotiSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('RotiSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('RotiSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('RotiSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('RotiSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('RotiSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('RotiSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('RotiSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('RotiSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('RotiSwap Info & Analytics')}`,
        description: 'View statistics for RotiSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('RotiSwap Info & Analytics')}`,
        description: 'View statistics for RotiSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('RotiSwap Info & Analytics')}`,
        description: 'View statistics for RotiSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('RotiSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('RotiSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('RotiSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('RotiSwap')}`,
      }
    default:
      return null
  }
}
