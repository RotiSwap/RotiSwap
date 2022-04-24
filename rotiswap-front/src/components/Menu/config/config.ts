import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Exchange'),
    icon: 'Swap',
    href: '/swap',
    hideSubNav: true,
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Liquidity'),
    icon: 'Add',
    href: '/liquidity',
    hideSubNav: true,
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Farms'),
    href: '/farms',
    icon: 'Farm',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Pools'),
    href: '/pools',
    icon: 'Pool',
    showItemsOnMobile: false,
    items: [],
  },
  // {
  //   label: t('NFT'),
  //   href: '/nfts',
  //   icon: 'NFT',
  //   showItemsOnMobile: false,
  //   items: [],
  // },  
  // {
  //   label: t('Launch'),
  //   href: '/launch',
  //   icon: 'Launch',
  //   showItemsOnMobile: false,
  //   items: [],
  // },
]

export default config
