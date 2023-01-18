//1. First Reverse

// Have the function FirstReverse(str) take the str
//  parameter being passed and return the string in reversed
//  order. For example: if the input string is "Hello World and Coders"
//  then your program should return the string sredoC dna dlroW olleH.

function firstReverse(str) {
  return str.split("").reverse().join("");
}
// console.log(firstReverse("Hello World and Coders"))

//2. First Factorial

// Have the function FirstFactorial(num) take the num parameter being
// passed and return the factorial of it. For example: if num = 4, then
//  your program should return (4 * 3 * 2 * 1) = 24.
//  For the test cases, the range will be between 1 and 18 and the
//   input will always be an integer.

function fact(num) {
  if (num < 1) {
    return 1;
  }

  return num * fact(num - 1);
}

// console.log(fact(5))

//3. Longest Word

// Have the function LongestWord(sen) take the sen parameter being
// passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first
// word from the string with that length. Ignore punctuation and assume sen
// will not be empty.

function longWord(str) {
  let longest = "";
  let str1 = str.split(" ");
  for (let i = 0; i < str1.length; i++) {
    if (longest.length < str1[i].length) {
      longest = str1[i];
    }
  }
  return longest;
}

// console.log(longWord("hello haiiii"))

// 4.Letter Changes

// Have the function LetterChanges(str) take the str parameter being passed and
// modify it using the following algorithm. Replace every letter in the string
// with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return
//  this modified string.

function letterChange(str) {
  let aplha = "abcdefghijklmnopqrstuvwxyz";
  let change = "bcdEfghIjklmnOpqrstUvwxyzA";
  let changed = "";
  for (let i = 0; i < str.length; i++) {
    console.log(aplha.indexOf(str[i]));
    if (aplha.indexOf(str[i]) != -1) {
      changed += change.charAt(aplha.indexOf(str[i]));
    } else {
      changed += str[i];
    }
  }
  return changed;
}

// console.log(letterChange("hello!"))

//5.Simple Adding

// Have the function SimpleAdding(num) add up all the numbers from 1 to num.
//  For example: if the input is 4 then your program should return 10 because
//  1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number
//  from 1 to 1000.

function simpleAdd(num) {
  if (num == 1) {
    return 1;
  }

  return num + simpleAdd(num - 1); //11
}
//  console.log(simpleAdd(12))

//6. Letter Capitalize

// Have the function LetterCapitalize(str) take the str parameter being passed and
// capitalize the first letter of each word. Words will be separated by only one space.

function lettercap(str) {
  return str
    .split(" ")
    .map((i) => i[0].toUpperCase().concat(i.slice(1)))
    .join(" ");
}
// console.log(lettercap("hai my"))

//7. Simple Symbols

// Have the function SimpleSymbols(str) take the str parameter being passed and determine
// if it is an acceptable sequence by either returning the string true or false.
// The str parameter will be composed of + and = symbols with several characters between
// them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded
// by a + symbol. So the string to the left would be false. The string will not be empty
// and will have at least one letter.

function simpleSymbols(str) {
  let str1 = "=" + str + "=";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].match(/[a-z]/i) != null) {
      if (str1[i - 1] != "+" || str1[i + 1] != "+") {
        {
          return false;
        }
      }
    }
  }
  return true;
}
// console.log( simpleSymbols("d+c=g+e+") )

//8. Check Nums

// Have the function CheckNums(num1,num2) take both parameters being passed and return
// the string true if num2 is greater than num1, otherwise return the string false.
// If the parameter values are equal to each other then return the string -1.

function checknums(num1, num2) {
  return num1 == num2 ? "-1" : num2 > num1 ? " true" : "false";
}
// console.log(checknums(199,200))

//9. Time Convert

// Have the function TimeConvert(num) take the num parameter being passed and return
// the number of hours and minutes the parameter converts to (ie. if num = 63 then the
//     output should be 1:3). Separate the number of hours and minutes with a colon.

function timeConvert(num) {
  let hr = Math.floor(num / 60);
  let min = num % 60;
  let min1 = min < 10 ? 0 + min : min;
  let str = hr + ":" + min1;
  return str;
}
// console.log(timeConvert(179))

// 10. Alphabet Soup

// Have the function AlphabetSoup(str) take the str string parameter being passed and
// return the string with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.

function alphabetSoup(str) {
  return str.split("").sort().join("");
}
// console.log( alphabetSoup("hello") )

// 11. AB Check

// Have the function ABCheck(str) take the str parameter being passed and return the
// string true if the characters a and b are separated by exactly 3 places anywhere i
//  the string at least once (ie. "lane borrowed" would result in true because there is
//  exactly three characters between a and b). Otherwise return the string false.

function abCheck(str) {
  let pattern = /a...b|b...a/;
  return pattern.test(str);
}
// console.log(abCheck("lane vbeewo"))

//12. Vowel Count

// Have the function VowelCount(str) take the str string parameter being passed and return
// the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8).
//  Do not count y as a vowel for this challenge.

function vowelCount(str) {
  let vowel = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// console.log(vowelCount("all cows eat grass and moo"))

// 13.Word Count

// Have the function WordCount(str) take the str string parameter being passed and
// return the number of words the string contains (e.g. "Never eat shredded wheat or cake"
//  would return 6). Words will be separated by single spaces.

function wordCount(str) {
  return str.split(" ").length;
}
// console.log(wordCount("Never eat shredded wheat or cake") )

// 14. Ex Oh

// Have the function ExOh(str) take the str parameter being passed and return the
// string true if there is an equal number of x's and o's, otherwise return the string
// false. Only these two letters will be entered in the string, no punctuation or numbers.
// For example: if str is "xooxxxxooxo" then the output should return false because there
//  are 6 x's and 5 o's.

function exOh(str) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      countX++;
    } else if (str[i] === "o") {
      countO++;
    }
  }

  if (countO === countX) {
    return true;
  } else {
    return false;
  }
}
// console.log(exOh("xoxoxoxoox"))
// 15. Palindrome

// Have the function Palindrome(str) take the str parameter being passed and return the
// string true if the parameter is a palindrome, (the string is the same forward as it
// is backward) otherwise return the string false. For example: "racecar" is also
// "racecar" backwards.Punctuation and numbers will not be part of the string.

function palndrome(str) {
  let str1 = str.split("");
  let strReverse = str.split("").reverse();
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != " ") {
      arr1.push(str1[i]);
    }
  }
  for (let i = 0; i < strReverse.length; i++) {
    if (strReverse[i] != " ") {
      arr2.push(strReverse[i]);
    }
  }
  if (arr1.join() == arr2.join()) {
    return true;
  } else {
    return false;
  }
}
// console.log(palndrome("never odd or even"))

// 16. Arith Geo

// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the
// string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric"
// if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1
// . An arithmetic sequence is one where the difference between each of the numbers is
//  consistent, where as in a geometric sequence, each term after the first is multiplied
//   by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric
//   example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not
//    be entered, and no array will contain all the same

function arithGeo(arr) {
  let arithmetic = true;
  // test arithmetic
  for (let i = 2, diff = arr[1] - arr[0]; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      arithmetic = false;
    }
  }

  if (arithmetic) {
    return "Arithmetic";
  }

  let geometric = true;
  // geometric
  for (let i = 2, divisor = arr[1] / arr[0]; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== divisor) {
      geometric = false;
    }
  }

  if (geometric) {
    return "Geometric";
  }

  return -1;
}
// console.log(arithGeo([2, 4, 6, 8]));

// 17. Array Addition I

// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and 
// return the string true if any combination of numbers in the array (excluding the largest 
// number) can be added up to equal the largest number in the array, otherwise return 
// the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should
//  return  true because 4 + 6 + 10 + 3= 23. The array will not be empty, will not 
// contain all the same elements, and may contain negative numbers.

function addition(arr){
    
let sortedarr = arr.sort((a,b)=>a-b)
let largest=sortedarr[sortedarr.length-1]
sortedarr.pop(sortedarr[sortedarr.length-1])
let sumArr= sortedarr.reduce((acc,cur)=>acc+cur,0)
// console.log(sortedarr,largest,sumArr)
 if(largest===sumArr){
    return true
 }else{
    return false
 }
}

// console.log(addition([4, 6, 23, 10,  3]))

// 18.Letter Count I

// Have the function LetterCountI(str) take the str parameter being passed and return 
// the first word with the greatest number of repeated letters. For example: "Today, is 
// the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it
//  comes before ever which also has 2 e's. If there are no words with repeating letters 
//  return -1. Words will be separated by spaces.

function letterCount(str) {
	var words = str.split(' ');
	var longest = 0;
	var longest_word;
	for ( var i = 0; i < words.length; i++ ) {
		var word = words[i];
		for ( var j = 0; j < word.length; j++ ) {
			var pattern = new RegExp( word[j], 'gi' );
			var length = word.match( pattern ).length;
			if ( length > 1 && length > longest ) {
				longest = word.match( pattern ).length;
				longest_word = word;
			}
		}
	}
    console.log(longest_word)
	return longest_word ? longest_word : -1;
}
console.log(letterChange("Today, is the greatest day ever!"))
