function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length + 1; i++) {
        if (num > arr[i]) {} else {
            return i;
        }
    }
}

getIndexToIns([2, 5, 10], 15);
