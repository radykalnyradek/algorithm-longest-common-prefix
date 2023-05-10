var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length === 0) return prefix;
  for (i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) {
        console.log(prefix);
        return;
      }
    }
    prefix += character;
  }
  console.log(prefix);
};

longestCommonPrefix(["flower", "flow", "flight"]);