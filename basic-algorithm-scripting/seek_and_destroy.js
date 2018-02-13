function destroyer(arr, valA, valB, valC) {
    function arrFilter(val) {
        if (val != valA && val != valB && val != valC) {
            return val;
        }
    }

    return arr.filter(arrFilter);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
