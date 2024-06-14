// Part 1: Math Problems
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5. THIS IS TRUE
const isDivisibleByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) <= 5;
console.log(isDivisibleByFive)

// Check if the first number is larger than the last. this is TRUE
const firstIsLargerThanTheLast = (n1 > n4);
console.log(firstIsLargerThanTheLast)

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number. THIS IS 20
const arithmeticChain = (n2 - n1) * n3 / n4;
console.log(arithmeticChain)

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons.
// THIS IS TRUE
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isUnder25)

const isCorrect = isDivisibleByFive && firstIsLargerThanTheLast && arithmeticChain && isUnder25;

console.log(isCorrect)

// Finally, log the results.
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);

console.log('-----------------------------------')
// Part 2: Practical Math
const mph1 = 55;
const mph2 = 60;
const mph3 = 75;
const mpg1 = 30;
const mpg2 = 28;
const mpg3 = 23;
// const fb = 175; // fuel budget
const cof = 3; // cost of fuel per gallon
const dot = 1500; // distance of trip in total

console.log('duration in hours')
const tripDuration55 = dot / mph1;
console.log(Math.floor(tripDuration55));

const tripDuration60 = dot / mph2;
console.log(tripDuration60);

const tripDuration75 = dot / mph3;
console.log(tripDuration75);

console.log('gallons needed')
const gallonsNeeded30 = dot / mpg1;
console.log(Math.floor(gallonsNeeded30));

const gallonsNeeded28 = dot / mpg2;
console.log(Math.floor(gallonsNeeded28));

const gallonsNeeded23 = dot / mpg3;
console.log(Math.floor(gallonsNeeded23));

console.log('cost of gas')
const gasCost30 = gallonsNeeded30 * cof;
console.log(Math.floor(gasCost30));

const gasCost28 = gallonsNeeded28 * cof;
console.log(Math.floor(gasCost28));

const gasCost23 = gallonsNeeded23 * cof;
console.log(Math.floor(gasCost23));

let fb = gasCost28;
if (fb <= 175) {
  console.log('in the budget');
} 
else if (fb > 175) {
  console.log('not in the budget');
}

// based on the informtion above, driving an average of 60mph will have us 
// getting there the fastest but still staying within our budget

