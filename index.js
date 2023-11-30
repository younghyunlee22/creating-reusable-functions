// Take an array of numbers and return the sum.
let numArray = [1, 2, 3];

function addArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum;
}

console.log(addArray(numArray));

// Take an array of numbers and return the average.
function avgArray(array) {
  let sum = addArray(array);
  let avg = sum / array.length;
  return avg;
}

console.log(avgArray(numArray));
