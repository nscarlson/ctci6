const { quicksort } = require('./quicksort')

describe('quicksort', () => {
    let arr1 = []

    beforeEach(() => {
        arr1 = [1, 2, 10, 5, 6, 3, 22, 21, 9]
    })

    it('correctly sorts an array', () => {
        quicksort(arr1)
        expect(arr1).toEqual([1, 2, 3, 5, 6, 9, 10, 21, 22])
    })
})
