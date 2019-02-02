const { chunkify } = require('./chunkify')

describe('chunkify', () => {
    const length2Arr = [1, 2]
    const length10Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const length20Arr = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ]
    
    it('returns equal arrays for evenly divisible case', () => {
        expect(chunkify(length10Arr, 5)).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]])
        expect(chunkify(length10Arr, 10)).toEqual([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])
        expect(chunkify(length2Arr, 2)).toEqual([[1], [2]])
    })

    it('returns balanced arrays for non-divisible cases', () => {
        expect(chunkify(length10Arr, 4)).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8],
            [9, 10]
        ])
        expect(chunkify(length20Arr, 3)).toEqual([
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20]
        ])
    })
})
