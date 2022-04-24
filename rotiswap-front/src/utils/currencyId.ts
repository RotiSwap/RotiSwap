import { Currency, ECO, Token } from '@pancakeswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ECO) return 'ECO'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
