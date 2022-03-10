// Prompt 1: Write a method that takes in a string and counts each instance of each letter in the string. 
// It should return an array of integers, where each integer represents the number of occurrences of a letter. 
// The array should start with the number of as, and end with number of zs (i.e. if the array is called letters, 
// then letters[0] should represent the number of as, and letters[25] should represent the number of zs).

// Example:

// Given: "As you know, Morty, I've got a lot of enemies in the universe that consider my genius a threat"
// Return: [ 5, 0, 1, 1, 10, 1, 2, 3, 6, 0, 1, 1, 3, 6, 7, 0, 0, 4, 5, 8, 3, 2, 1, 0, 3, 0 ]


// First solution
function countLetterInstance(inputString){
  alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let letterCount = [];
  const inputArray = inputString.toLowerCase().split("");
  const inputLetters = [];
  inputArray.forEach(function(character){
    alphabet.forEach(function(alphabetLetter){
      if (alphabetLetter === character){
        inputLetters.push(character);
      }
    })
  })

  alphabet.forEach(function(alphabetLetter, index){
    letterCount[index] = 0;
    inputLetters.forEach(function(inputLetter){
      if (alphabetLetter === inputLetter){
        letterCount[index] += 1;
      }
    })
  })
 
  return letterCount;
}

// Second solution. This one uses a Regular Expression (they're confusing at first but they come in handy sometimes, 
// Look at how much less code it saves us from having to write!)

function countLetterInstance(inputString){
  alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let inputArray = inputString.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split("");
  let outputArray = [];
  alphabet.forEach(function(alphabetLetter, index){
    outputArray[index] = 0;
    inputArray.forEach(function(inputLetter){
      if(alphabetLetter === inputLetter){
        outputArray[index] += 1;
      }
    })
  })
  return outputArray;
}

// FURTHER EXPLORATION 
// Alter your method to return a variable that contains key-value pairs, where each key is a letter in the string, 
// and the value is the number of times that letter occurred in the string. You might choose to dynamically create a variable name. 
// For example, if you wanted to set "a" as a key and give a value 1, that would be written as follows: 
// let letter = "a"; let letters={}; letters[letter] = 1;. 
// Example: Return: { a:5, c:1, d:1, e:10, f:1, g:2, h:3, i:6, k:1, l:1, m:3, n:6, o:7, p:0, r:4, s:5, t:8, u:3, v:2, y:3 }

function countLetterInstanceReturnObject(inputString){
  alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let inputArray = inputString.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split("");
  let outputObject = {};
  alphabet.forEach(function(alphabetLetter, index){
    outputObject[alphabetLetter] = 0;
    inputArray.forEach(function(inputLetter){
      if(alphabetLetter === inputLetter){
        outputObject[alphabetLetter] += 1;
      }
    })
  })
  return outputObject;
}

// Go ahead and copy/paste into the console to test!