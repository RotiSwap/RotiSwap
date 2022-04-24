import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    11: '0xCF41D6449d9019b1c19F455C8F64DA43579EdeE1',
    1120: '0xCF41D6449d9019b1c19F455C8F64DA43579EdeE1',
  }

  it(`get address for mainnet (chainId 1120)`, () => {
    process.env.REACT_APP_CHAIN_ID = '1120'
    const expected = address[1120]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 11)`, () => {
    process.env.REACT_APP_CHAIN_ID = '11'
    const expected = address[11]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[1120]
    expect(getAddress(address)).toEqual(expected)
  })
})
