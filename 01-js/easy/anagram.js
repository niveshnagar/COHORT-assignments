/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/ 

// nlogn
// function isAnagram(str1, str2) {
//   return (
//     str1.toLowerCase().split("").sort().join("") ===
//     str2.toLowerCase().split("").sort().join("")
//   );
// }


// o(n)
const createMapObj = (str) => {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    // if the key already exists add 1
    if (obj[str[i]] !== undefined) {
      obj[str[i]]++;
    }
    // if the key doesn't exist add the key
    else {
      obj[str[i]] = 1;
    }
  }
  return obj;
};

function isAnagram(str1, str2) {
  // check for equal lengths
  if (str1.length !== str2.length) {
    return false;
  } 

  else {
    // create maps using objects
    const map1 = createMapObj(str1.toLowerCase());
    const map2 = createMapObj(str2.toLowerCase());

    if (Object.keys(map1).length !== Object.keys(map2).length) {
      return false;
    } else {
      const arr = Object.keys(map1);
      for(let i=0; i<arr.length; i++){
        const key = arr[i];
        if(map1[key] !== map2[key]){
          return false
        }
      }
    }
  }


  return true;
}

module.exports = isAnagram;
