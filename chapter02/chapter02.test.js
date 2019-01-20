const chapter02 = require('./chapter02')
const SinglyList = require('../util/SinglyList')

describe('Chapter 02', () => {
    describe('deleteMiddleNode', () => {
        it('returns correct results', () => {
            expect(chapter02.deleteMiddleNode()).toEqual()
        })
    })

    describe('intersection', () => {
        it('returns correct results', () => {
            expect(chapter02.intersection()).toEqual()
        })
    })

    describe('loopDetection', () => {
        it('returns correct results', () => {
            expect(chapter02.loopDetection()).toEqual()
        })
    })

    describe('palindrome', () => {
        it('returns correct results', () => {
            expect(chapter02.palindrome()).toEqual()
        })
    })

    describe('partition', () => {
        it('returns correct results', () => {
            expect(chapter02.partition()).toEqual()
        })
    })

    describe('removeDups', () => {
        it('returns correct results', () => {
            expect(chapter02.removeDups()).toEqual()
        })
    })

    describe('returnKthToLast', () => {
        it('returns correct results', () => {
            expect(chapter02.returnKthToLast(
                new SinglyList()
                    .add('a')
                    .add('b')
                    .add('c')
                    .add('d')
                    .add('e')
                    .add('f'), 3
                ).data).toEqual('d')
        })
    })

    describe('sumLists', () => {
        it('returns correct results', () => {
            expect(chapter02.sumLists()).toEqual()
        })
    })
})
