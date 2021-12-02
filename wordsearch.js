const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));
  const transposeMatrix = [];
  const rowLength = letters[0].length;
  let vertJoin;
  console.log(horizontalJoin);

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      for (let i = 0; i < rowLength; i++) {
        const row = [];
        for (let arr of letters) {
          const value = arr[i];
          row.push(value);
        }
        transposeMatrix.push(row);
      }
      vertJoin = transposeMatrix.map((ls) => ls.join(''));
      console.log(vertJoin);
    }
  }
  for (k of vertJoin) {
    if (k.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;
