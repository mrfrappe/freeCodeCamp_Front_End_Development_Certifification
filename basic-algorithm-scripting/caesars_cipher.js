function rot13(str) { // LBH QVQ VG!
  var tabToEncrypt = str.split("");
  var utf16Code = 0;
  var encodedMessage = "";
  for (var i = 0; i < tabToEncrypt.length; i++) {
    utf16Code = tabToEncrypt[i].charCodeAt();
    if (utf16Code < 65 || utf16Code > 90) {
      console.log(encodedMessage + " after " + String.fromCharCode(utf16Code));
      encodedMessage += String.fromCharCode(utf16Code);
    } else if (utf16Code < 78) {
      encodedMessage += String.fromCharCode(utf16Code + 13);
    } else if (utf16Code > 78 && utf16Code < 90) {
      encodedMessage += String.fromCharCode(utf16Code - 13);
    } else {
      encodedMessage += String.fromCharCode(utf16Code - 13);
    }

  }
  return encodedMessage;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
