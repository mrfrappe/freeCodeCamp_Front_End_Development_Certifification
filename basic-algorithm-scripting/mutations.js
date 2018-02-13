function mutation(arr) {
    var strFirst = arr[0].toLowerCase();
    var arrSecond = arr[1].toLowerCase().split("");
    var isTrue = false;
    for (var i = 0; i < arrSecond.length; i++) {
        if (strFirst.indexOf(arrSecond[i]) > -1) {
            isTrue = true;
        } else {
            return false;
        }
    }
    return isTrue;
}

mutation(["hello", "hey"]);
