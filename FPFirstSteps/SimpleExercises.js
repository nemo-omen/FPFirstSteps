export const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

export const ranks = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];

function reverseNumber(number) {
  // return number.toString();
  return number.toString().split("").reverse().join("");
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

function shuffleString(letters) {
  return letters.split("").sort(() => 0.5 - Math.random()).join("");
}

function shuffleArray(arr) {
  return arr.sort(() => 0.5 - Math.random());
}

function fyShuffle(arr) {
  for(var i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function combineCardArrays(parentArray, childArray) {
  let combined = [];
  for(var i = 0; i < parentArray.length; i++) {
    for(var j = 0; j < childArray.length; j++) {
      combined.push(childArray[j] + " of " + parentArray[i]);
    }
  }
  return combined;
}

function newCombiner(parentArray, childArray) {
  const combined = [];
  parentArray.forEach((parentElement) => {
    childArray.forEach((childElement) => {
      combined.push(childElement + " of " + parentElement);
    });
  });
  return combined;
}

function returnFirst(arr) {
  if(arr.length === 1) {
    return arr[0];
  } else {
    return returnFirst(arr[0]);
  }
}

function recursiveCombine(parentArray, childArray) {
  
}


console.log(reverseNumber(1658400));

console.log(reverseString("Hello, world!"));

console.log(shuffleString("abcdefg"));

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(fyShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(fyShuffle(["dog", "grackle", "cat", "lizard", "spider", "roly poly", "giraffe", "penguin", "human"]));

console.log(fyShuffle(combineCardArrays(suits,ranks)));

console.log(fyShuffle(newCombiner(suits, ranks)));

console.log(returnFirst(suits));