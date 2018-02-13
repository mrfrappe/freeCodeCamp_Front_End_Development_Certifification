function confirmEnding(str, target) {
    var strTab = [];
    var targetLength = target.length;
    if (targetLength == 1) {
        strTab = str.split("");

        return (strTab[strTab.length - 1] == target);


    } else {
        strTab = str.split(" ");
        if (strTab[strTab.length - 1].includes(target)) {
            return true;
        } else {
            return false;
        }
    }
}

confirmEnding("Bastian", "n");
