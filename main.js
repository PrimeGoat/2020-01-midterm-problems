/******************
 * YOUR CODE HERE *
 ******************/

function fizzBuzzSingleNumber(num) {
  let out = "";

  if(num % 3 === 0) {
    out += "Fizz";
  }
  if(num % 5 === 0) {
    out += "Buzz";
  }

  if(out === "") {
    return num;
  } else {
    return out;
  }
}

function getMiddleLetters(str) {
  // abcd 
  // abc  1
  let out = "";
  let middle = Math.floor(str.length / 2);
  out += str[middle - 1];
  out += str[middle];
  if(str.length % 2 !== 0) {
    out += str[middle + 1];
  }
  return out;
}

function getNextLetter(char) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  return alpha[(alpha.search(char) + 1) % 26]
}

function getAverage(array) {
  sum = 0;

  for(element of array) {
    sum += element;
  }

  return sum / array.length;
}

function triStateAreaOnly(towns) {
  out = [];

  for(town of towns) {
    state = town.substr(-2, 2);

    if(state === "NJ" || state === "NY" || state === "CT") {
      out.push(town);
    }
  }

  return out;
}

function removeTrolls(posts) {
  out = [];

  for(post of posts) {
    if(containsLowerCase(post)) {
      out.push(post);
    }
  }
  return out;
}

function containsLowerCase(str) {
  return str.match(/[a-z]/) !== null;
}

function cipher(str) {
  out = "";
  for(char of str.split('')) {
    out += getNextLetter(char);
  }

  return out;
}

function addToMultiDigitNumbers(add, nums) {
  let out = [];

  for(num of nums) {
    if(String(num).length === 1) {
      out.push(num);
    } else {
      out.push(num + add);
    }
  }
  return out;
}

function hyphenateNames(names) {
  let out = [];

  for(name of names) {
    let index = name.match(/( [^ ]+)$/)["index"];
    chars = name.split('');
    chars[index] = '-';
    out.push(chars.join(''));
  }
  return out;
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
