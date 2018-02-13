function titleCase(str) {
    var strTab = str.split(" ");
    var strTab2 = [];
    for (var i = 0; i < strTab.length; i++) {
        strTab2 = strTab[i].split("");
        for (var j = 0; j < strTab[i].length; j++) {
            if (j === 0) {
                strTab2[j] = strTab2[j].toUpperCase();
            } else {
                strTab2[j] = strTab2[j].toLowerCase();
            }
        }
        strTab[i] = strTab2.join("");
    }
    return strTab.join(" ");
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
