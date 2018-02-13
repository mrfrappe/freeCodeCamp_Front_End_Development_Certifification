function palindrome(str) {
    var firstArray = str.replace(/[\W_]/g, "").toLowerCase().split("");
    var secondArray = str.replace(/[\W_]/g, "").toLowerCase().split("").reverse();
    var firstString = firstArray.join("");
    var secondString = secondArray.join("");

    return firstString === secondString;
}

palindrome("nope");
