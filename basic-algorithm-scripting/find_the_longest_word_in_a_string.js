
function findLongestWord(str) {
  var strTab = str.split(" ");
  var strLength = [];
  for (var i = 0; i < strTab.length; i++){
    strLength[i] = strTab[i].length;

  }
  strLength.sort(function(a, b){return b-a;});

  return (strLength[0]);
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
