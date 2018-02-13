function truncateString(str, num) {
    var strTab = str.split(" ");
    var newStr = [];
    var sum = 0;
    for (var i = 0; i < strTab.length; i++) {
        sum += strTab[i].length;

        newStr[i] = strTab[i];
        if (sum > num && num > 3) {
            newStr[i] = "";
            return newStr.join(" ").replace(/\s*$/, "") + "...";
        } else if (num < 3) {
            return newStr[i].slice(0, num) + "...";
        }
    }
    return newStr.join(" ");
}

truncateString("Peter Piper picked a peck of pickled peppers", 14);
