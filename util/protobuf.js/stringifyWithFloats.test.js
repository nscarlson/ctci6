/**
 * @jest-environment node
 */

const { stringifyWithFloats } = require('./stringifyWithFloats')

describe('stringifyWithFloats', () => {
    let payload

    beforeEach(() => {
        payload = {
            a: 1234,
            b: 25.024,
            c: 'this is a string',
            d: 42,
            InnerMessage: {
                a: 923.0,
                b: 'another string'
            }
        }
    })

    it('returns the correct buffer', () => {
        expect(stringifyWithFloats(payload))
            .toEqual(new Buffer([8, 210, 9, 21, 39, 49, 200, 65, 26, 16, 116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 42]))
    })

    it('errors if payload is wrong type', () => {
        const invalidPayload = payload

        invalidPayload.a = 'wrong type string, expecting int32'
        expect(() => stringifyWithFloats(invalidPayload))
            .toThrow('a: integer expected')

        invalidPayload.a = 1234.01
        expect(() => stringifyWithFloats(invalidPayload))
            .toThrow('a: integer expected')
    })
})
