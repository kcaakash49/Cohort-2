/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  
  const sortStr1 = str1.split("").sort().join("")
  console.log(sortStr1)
  const sortStr2 = str2.split("").sort().join("")
  console.log(sortStr2)

  return sortStr1===sortStr2;
}

// console.log(isAnagram("Dave","Vade"))
module.exports = isAnagram;
