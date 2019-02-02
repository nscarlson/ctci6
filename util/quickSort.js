/**
 * Hoare partition
 * https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
 * 
 * @param {Object}  arr 
 * @param {any}     left 
 * @param {any}     right 
 */
const hoarePartition = (arr, left, right) => {
    while (left < right) {
        while (arr[left] < arr[right]) {
            [array[left], array[right]] = [array[right], array[left]]
        }
    }
}

/**
 * 
 */
const quickSort = () => {
    
}

export default quickSort
