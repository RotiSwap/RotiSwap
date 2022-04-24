import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'ROTI-ECO LP',
    lpAddresses: {
      11: '0xF4B8a078B530F7ea5AcD65051679075223916b28',
      1120: '0xC0b81Aaf30adC4e522e957caD00742792C7d3917',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'USDR-ECO LP',
    lpAddresses: {
      11: '0x6cC74C701B13d14b8E1D90B6FeFa6a856caa6Ac2',
      1120: '0x4064220bC16d643249aa573957e4C94a2Bf772f3',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'ROTI',
    lpAddresses: {
      11: '0x7Dc4196386D53E30226EAb1e0a95C7271a586Ba4',
      1120: '0x63C8A977B6a14A3D7B3cdcC418997010434a3A00',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
    isTokenOnly: true,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'WECO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
  //   },
  //   token: serializedTokens.wbnb,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
  // {
  //   pid: 2,
  //   lpSymbol: 'ROTI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x34590017147534F01bb3E95b2E018313684412Fc',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'ROTI-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0A0983b634CF0f7bacA19D880A8699C96b0395E0',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.usdt,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'ROTI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcbb21Da5Fee14a468b34EBdAb10656408c36Ab5b',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'WECO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
  //   },
  //   token: serializedTokens.wbnb,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
]

export default farms
