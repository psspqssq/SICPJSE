// Newton's method for cube roots is based on the fact that if y is an approximnation to the cube root of x, then a better approximation is given by the value

//((x/y^2) + 2y) / 3

// Use this formula to implement a cube-root function analogous to the square-root function.

function square(x) {
  return x * x;
}

function cbrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : cbrt_iter(improve(guess, x), x);
}

function improve(guess, x) {
  return newton_cube_root_approximation(guess, x);
}

function newton_cube_root_approximation(guess, x) {
  return (x / square(guess) + 2 * guess) / 3;
}

function is_good_enough(guess, x) {
  return guess === improve(guess, x);
}

function cbrt(x) {
  return cbrt_iter(1, x);
}

console.log(cbrt(-27));

// Answer

// The solution is the same as 1.7 exercise's answer, but instead of improving the guess by using averages, we use Newton's method for cube roots and improve each iteration with it until we find a good enough answer.
