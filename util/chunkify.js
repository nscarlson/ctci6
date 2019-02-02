/**
 * Provided an array, splits an array into n chunks as balanced as possible
 * 
 * @param {number[]}    arr An array of numbers
 * @param {number}      n   Integer number of chunks
 * 
 * @returns {number[number[]]} An array of chunks from original array
 */
const chunkify = (arr, n) => {
    const length = arr.length
    const result = []
    let groupSize

    // Only one element, return arr
    if (length < 2) {
        return arr
    }

    // Even case
    if (length % n === 0) {
        groupSize = Math.floor(length / n)

        for (let i = 0; i < length; i += groupSize) {
            result.push(arr.slice(i, i + groupSize))
        }

        return result
    }
    
    // Uneven case
    for (let i = 0; i < length; i += groupSize, n--) {
        groupSize = Math.ceil((length - i) / n)

        result.push(arr.slice(i, i + groupSize))
    }

    return result
}

module.exports = { chunkify }
