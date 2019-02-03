const hoarePartition = (arr, lo, hi, pivot) => {
    while (lo <= hi) {
        while (arr[lo] < pivot) {
            lo++;
        }

        while (arr[hi] > pivot) {
            hi--;
        }

        if (lo <= hi) {
            [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
            lo++;
            hi--;
        }
    }
    return lo;
}

function quicksort (arr, lo = 0, hi = arr.length - 1) {
    if (lo >= hi) {
        return
    }

    const pivot = arr[Math.floor((lo + hi) / 2)]
    const index = hoarePartition(arr, lo, hi, pivot)

    quicksort(arr, lo, index - 1)
    quicksort(arr, index, hi)

    return arr
}

module.exports = { quicksort }
