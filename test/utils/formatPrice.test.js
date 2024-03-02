import { formatNumber } from '../../src/utils/formatPrice'

describe('Prueba formatNumber', () => {
    const price = 10000
    test('El tipo de la respuesta es un texto', () => {
        const formattedPrice = formatNumber(price)
        expect(typeof formattedPrice).toBe('string')
    })
})