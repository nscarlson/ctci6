const hoarePartition = (arr, lo, hi) => {
    const pivot = arr[Math.floor((lo + hi) / 2)]

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

    const pivot = hoarePartition(arr, lo, hi)

    quicksort(arr, lo, pivot - 1)
    quicksort(arr, pivot, hi)

    return arr
}

module.exports = { quicksort }
