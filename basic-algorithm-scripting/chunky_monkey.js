function chunkArrayInGroups(arr, size) {
    var newTab = [];
    var a = 0;
    var b = size;
    var tabLength = (arr.length) / size;
    for (var i = 0; i < tabLength; i++) {
        newTab[i] = arr.slice(a, b);
        if (a === 0) {
            a = size;
        } else {
            a = b;
        }
        b += size;
    }
    return newTab;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
