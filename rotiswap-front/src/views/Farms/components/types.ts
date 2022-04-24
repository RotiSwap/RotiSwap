export type TableProps = {
  data?: TableDataTypes[]
  selectedFilters?: string
  sortBy?: string
  sortDir?: string
  onSort?: (value: string) => void
}

export type ColumnsDefTypes = {
  id: number
  label: string
  name: string
  sortable: boolean
  background?: boolean
}

export type ScrollBarProps = {
  ref: string
  width: number
}

export type TableDataTypes = {
  POOL: string
  ROI: string
  EARNED: string
  STAKED: string
  DETAILS: string
  LINKS: string
}

export const MobileColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'farm',
    sortable: true,
    label: '',
  },
  {
    id: 2,
    name: 'earned',
    sortable: true,
    label: 'Earned',
    background: true,
  },
  {
    id: 3,
    name: 'apr',
    sortable: true,
    label: 'ROI',
    background: true,
  },
  {
    id: 6,
    name: 'details',
    sortable: true,
    label: '',
  },
]

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'farm',
    sortable: true,
    label: '',
  },
  {
    id: 2,
    name: 'earned',
    sortable: true,
    label: 'Earned',
    background: true,
  },
  {
    id: 3,
    name: 'apr',
    sortable: true,
    label: 'ROI',
    background: true,
  },
  {
    id: 4,
    name: 'liquidity',
    sortable: true,
    label: 'Liquidity',
    background: true,
  },
  {
    id: 5,
    name: 'multiplier',
    sortable: true,
    label: 'Multiplier',
    background: true,
  },
  {
    id: 6,
    name: 'details',
    sortable: true,
    label: '',
  },
]
