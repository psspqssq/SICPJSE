// The is_good_enough test used in computing square roots will not be very effective for finding the square roots of very small and large numbers. Also, in real computers, arithmetic operations are almost always performed with limited precision. This makes our test inadequate for very large numbers. Explain these statements, with examples showing how the test fails for small and large numbers. An alternative stategy for implementing is_good_enough is to watch how guess changes from one iteration to the next and to stop when the change is a very small fraction of the guess. Design a square-root function that uses this kind of end test. Does this work better for small and large numbers?

function square(x) {
  return x * x;
}

function abs(x) {
  return x > 0 ? x : x === 0 ? 0 : -x;
}

function sqrt_iter(guess, x) {
  return is_better_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function is_good_enough(guess, x) {
  return abs(square(guess) - x) < 0.0001;
}

function sqrt(x) {
  return sqrt_iter(1, x);
}

function is_better_enough(guess, x) {
  return guess === improve(guess, x);
}

// Answer

// The initial 0.0001 arbitrary value to evaluate the is_good_enogh function is too large for small numbers, and too small for large numbers, because the [improve] function will return a difference too large or too small, creating long recursive calls and even call stack errors.

// Since arithmetic operations are realized with limited precision, eventually, the improve function will return the same value as the guess value, therefore, I created a new function called is_better_enough, to substitute the calculation on the sqrt_iter function.

// The following examples

console.log(sqrt(9));
console.log(sqrt(10));
console.log(sqrt(0.00001));
console.log(sqrt(400000000000000000000000000000));

// Will evaluate to

// Function is_good_enough
// 3.000000001396984
// 3.162277665175675
// 0.008234553210954832
// *Call Stack Error*

// Function is_better_enough
// 3
// 3.162277660168379
// 0.0031622776601683794
// 632455532033675.8

// As shown, the is_better_enough is more precise and avoids call stack errors.
