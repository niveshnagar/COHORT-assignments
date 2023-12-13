/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str1 = str.toLowerCase().replace(/ /g, "").replace(/,/g, "");
  console.log(str1);
  let left = 0;
  let right = str1.length - 1;
  while (left < right) {
    if (str1[left] !== str1[right]) return false;
    left++;
    right--;
  }
  return true;
}

isPalindrome("Was it a car or a cat I saw");

module.exports = isPalindrome;
