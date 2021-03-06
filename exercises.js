// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  else {
    return x || y;
  }

}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'

  switch (language) {
    case 'German': return 'Guten Tag!';


    case 'English': return 'Hello!';


    case 'Spanish': return 'Hola!';


    default: return 'Hello!';

  }

}


//   if (language === 'German') {
//     return 'Guten Tag!';
//   }
//   else if (language === 'English') {
//     return 'Hello!';
//   }
//   else if (language === 'Spanish') {
//     return 'Hola!';
//   }
//   else {
//     return 'Hello!';
//   }

// }

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  switch (num) {
    case 5: return true;

    case 10: return true;

    default: return false;
  }

}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if ((num < 50) && (num > 20)) {
    return true;
  }
  else {
    return false;
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor

  if (num === Math.floor(num)) {
    return true;
  }
  else {
    return false;
  }

}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num

  if ((num % 3 === 0) && (num % 5 === 0)) {
    return 'fizzbuzz';
  }

  else if (num % 3 === 0) {
    return 'fizz';
  }
  else if (num % 5 === 0) {
    return 'buzz';
  }
  else {
    return num;
  }



}

function isPrime(n) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

  if (n<2) {
    return false;
  }
  else if (n === 2) {
    return true;
  }
  for (var i = 2; i < n; i++) {
    if (n%i === 0) {
      return false;
    }
    else if (i === n-1) {
      return true;
    }
  }
}


//   var i;

//     if(num === 1) { return false;}
//     else if(num == 2) { return true;}
//     else if(num == 3) { return true;}
//     else { 
//         for(i=Math.floor(Math.sqrt(num));i>=2;i--){
//             //console.log(i);//maybe another var in here? 
//                 if(num%i ==0 || num%2 ==0 || num%3 == 0) {return false;} 
//         } 
//         }
//     return true;
// }






  // if ((num >= 2) && (num % num === 0) && (num % 1 === 0)) {
  //   for (var i = 3; i < num; i += 2) {

  //   }
  //   return true;
  // }
  // else {
  //   return false;
  // }

  // if ((Math.sqrt(num) === 0) || (Math.sqrt(num) === 1))  {
  //   return false;
  // }
  // else if ((num % num === 0) && (num % 1 === 0)) {
  //   return true;
  // }
  // else {
  //   return false;
  // }



// }

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr.slice(-1)[0];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (var i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'

  return words.join(' ');

}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if (arr.includes(item)) {
    return true;
  }
  else {
    return false;
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value

  var sum = numbers.reduce(function(a, b){
    return a + b;
  });

  return sum;

}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average

var sum = testScores.reduce(function(a, b) {
  return a + b;
});

var avg = sum / testScores.length;

return avg;

}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer

  var largest = Math.max.apply(0, numbers);

  // var largest = numbers.reduce(function(a, b) {
  //   return Math.max(a, b);
  // });

  return largest;



}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
