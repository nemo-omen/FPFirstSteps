// bookmark Casey Morris's Functional JS with Es6 Recursive Patterns
// https://www.codementor.io/@caseymorris/functional-js-with-es6-recursive-patterns-m2pv4j98d

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

// returns first element of an array
const head = ([x]) => x;

// returns all but the first item in the array
const tail = ([x, ...xs]) => xs; // can also be written as `tail = ([, ...xs] => xs);`

// return if argument supplied is defined
const def = x => typeof x !== 'undefined';

// sues def() to find whether undefined
const undef = x => !def(x);

// returns a copy of an array
const copy = array => [...array];

// finds the length of an array using recursion
const length = ([x, ...xs], len = 0) => def(x) ? length(xs, len + 1) : len;

// returns permutations of two arrays
const permuteArrays = (array1, array2) => array1.flatMap(d => array2.map(v => {return {rank: d, suit: v}}));

// same as above tailored for building a deck of cards
const buildDeck = (suits, ranks) => suits.flatMap(suit => ranks.map(rank => {return {suit: suit, rank: rank}}));

// naive shuffle
const shuffle = (deck) => deck.sort(() => 0.5 - Math.random());



console.log(reverseNumber(1658400));

console.log(reverseString("Hello, world!"));

console.log(shuffleString("abcdefg"));

head(suits);/*?*/

tail(suits);/*?*/

copy(suits);/*?*/

length(suits);/*?*/

length(ranks);/*?*/

shuffle(buildDeck(suits, ranks));/*?*/