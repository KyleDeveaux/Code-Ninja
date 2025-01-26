function count(string) {
  let obj = new Object();

  const strCopy = string.split("");
  for (let i = 0; i < strCopy.length; i++) {

    let count = 1;

    // Checks wheather we have duplicates
    if (strCopy[i + 1] !== null) {
      for (let j = i + 1; j <= strCopy.length; j++) {
        if (strCopy[i] === strCopy[j]) {

          // Remove the extra char inside array
          strCopy.splice(j,1);
          count++;
          j--;
        }
      }

      if (!obj[strCopy[i]]) {
          obj[strCopy[i]] = count;
      }
    }
    console.log(obj);
    // reset count
  }
}

count("abaaa");