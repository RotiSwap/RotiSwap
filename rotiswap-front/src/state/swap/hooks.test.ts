import { parse } from 'qs'
import { Field } from './actions'
import { queryParametersToSwapState } from './hooks'

describe('hooks', () => {
  describe('#queryParametersToSwapState', () => {
    test('ECO to DAI', () => {
      expect(
        queryParametersToSwapState(
          parse(
            '?inputCurrency=ECO&outputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&exactAmount=20.5&exactField=outPUT',
            { parseArrays: false, ignoreQueryPrefix: true },
          ),
        ),
      ).toEqual({
        [Field.OUTPUT]: { currencyId: '0x6B175474E89094C44Da98b954EedeAC495271d0F' },
        [Field.INPUT]: { currencyId: 'ECO' },
        typedValue: '20.5',
        independentField: Field.OUTPUT,
        recipient: null,
      })
    })

    test('does not duplicate ECO for invalid output token', () => {
      expect(
        queryParametersToSwapState(parse('?outputCurrency=invalid', { parseArrays: false, ignoreQueryPrefix: true })),
      ).toEqual({
        [Field.INPUT]: { currencyId: '' },
        [Field.OUTPUT]: { currencyId: 'ECO' },
        typedValue: '',
        independentField: Field.INPUT,
        recipient: null,
      })
    })

    test('output ECO only', () => {
      expect(
        queryParametersToSwapState(
          parse('?outputCurrency=bnb&exactAmount=20.5', { parseArrays: false, ignoreQueryPrefix: true }),
        ),
      ).toEqual({
        [Field.OUTPUT]: { currencyId: 'ECO' },
        [Field.INPUT]: { currencyId: '' },
        typedValue: '20.5',
        independentField: Field.INPUT,
        recipient: null,
      })
    })

    test('invalid recipient', () => {
      expect(
        queryParametersToSwapState(
          parse('?outputCurrency=ECO&exactAmount=20.5&recipient=abc', { parseArrays: false, ignoreQueryPrefix: true }),
        ),
      ).toEqual({
        [Field.OUTPUT]: { currencyId: 'ECO' },
        [Field.INPUT]: { currencyId: '' },
        typedValue: '20.5',
        independentField: Field.INPUT,
        recipient: null,
      })
    })

    test('valid recipient', () => {
      expect(
        queryParametersToSwapState(
          parse('?outputCurrency=ECO&exactAmount=20.5&recipient=0x0fF2D1eFd7A57B7562b2bf27F3f37899dB27F4a5', {
            parseArrays: false,
            ignoreQueryPrefix: true,
          }),
        ),
      ).toEqual({
        [Field.OUTPUT]: { currencyId: 'ECO' },
        [Field.INPUT]: { currencyId: '' },
        typedValue: '20.5',
        independentField: Field.INPUT,
        recipient: '0x0fF2D1eFd7A57B7562b2bf27F3f37899dB27F4a5',
      })
    })
    test('accepts any recipient', () => {
      expect(
        queryParametersToSwapState(
          parse('?outputCurrency=ECO&exactAmount=20.5&recipient=bob.argent.xyz', {
            parseArrays: false,
            ignoreQueryPrefix: true,
          }),
        ),
      ).toEqual({
        [Field.OUTPUT]: { currencyId: 'ECO' },
        [Field.INPUT]: { currencyId: '' },
        typedValue: '20.5',
        independentField: Field.INPUT,
        recipient: 'bob.argent.xyz',
      })
    })
  })
})
