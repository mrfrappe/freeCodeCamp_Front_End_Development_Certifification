function repeatStringNumTimes(str, num) {
    var newStr = "";
    for (var i = 0; i <= num - 1; i++) {
        newStr += str;
    }
    return newStr;
}

repeatStringNumTimes("abc", 3);
