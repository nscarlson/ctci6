const chapter01 = require('./chapter01')

describe('Chapter 01', () => {
    describe('isUniqueChars', () => {
        it('returns correct results', () => {
            expect(chapter01.isUniqueChars('abcdefghijklmnopqrstuvwxyz')).toBe(true)
            expect(chapter01.isUniqueChars('abbcdefg')).toBe(false)
            expect(chapter01.isUniqueChars('C1qhUbjn1RBMvAt8fX2y')).toBe(false)        
        })
    })

    describe('oneEditAway', () => {
        it('returns correct results', () => {
            expect(chapter01.oneEditAway()).toEqual()
        })
    })

    describe('palindromePermutation', () => {
        it('returns correct results', () => {
            expect(chapter01.palindromePermutation()).toEqual()
        })
    })

    describe('permutation', () => {
        it('returns correct results', () => {
            expect(chapter01.permutation('ISTHISTHEREALLIFE', 'SHELLFIRESHATIETI')).toBe(true)
            expect(chapter01.permutation('ISTHI\0STHEREALLIFE', 'SHELLFIRESHATIE\0TI')).toBe(true)
            expect(chapter01.permutation('IS THIS JUST FANTASY', 'JUSTIFY SINHS TAT AS')).toBe(true)
            expect(chapter01.permutation('abcdef', 'abcdeg')).toBe(false)
            expect(chapter01.permutation('', '')).toBe(true)
            expect(chapter01.permutation('q🐳f🔥g😂', '🔥qf🐳😂g')).toBe(true)
        })
    })

    describe('rotateMatrix', () => {
        it('returns correct results', () => {
            expect(chapter01.rotateMatrix()).toEqual()
        })
    })

    describe('stringCompression', () => {
        it('returns correct results', () => {
            expect(chapter01.stringCompression()).toEqual()
        })
    })

    describe('stringRotation', () => {
        it('returns correct results', () => {
            expect(chapter01.stringRotation()).toEqual()
        })
    })

    describe('urlify', () => {
        it('returns correct results', () => {
            expect(chapter01.urlify()).toEqual()
        })
    })

    describe('zeroMatrix', () => {
        it('returns correct results', () => {
            expect(chapter01.zeroMatrix()).toEqual()
        })
    })
})
