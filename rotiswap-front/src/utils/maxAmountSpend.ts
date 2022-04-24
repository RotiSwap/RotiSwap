import { CurrencyAmount, ECO, JSBI } from '@pancakeswap/sdk'
import { MIN_ECO } from '../config/constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === ECO) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_ECO)) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_ECO))
    }
    return CurrencyAmount.ether(JSBI.BigInt(0))
  }
  return currencyAmount
}

export default maxAmountSpend
