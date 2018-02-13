function slasher(arr, howMany) {
    var arrLength = arr.length;
    return (arr.slice(howMany, arrLength));
}

slasher([1, 2, 3], 2);
