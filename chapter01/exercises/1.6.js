// Alyssa P. Hacker doesn't like the syntax of conditional expressions, involving the characters ? and :. " Why can't I just declare an ordinary conditional function whose application works just like conditional expressions?"  she asks. Alyssa's friend Eva Lu Ator claims this can indeed be done, and she declares a conditional function as follows:

function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

// Eva demonstrates the program for Alyssa:

conditional(2 === 3, 0, 5);
5;
conditional(1 === 1, 0, 5);
0;

// Delighted, Alyssa uses conditional to rew3rite the square-root program:

function sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x)
  );
}

// What happens when Alyssa attempts to use this to compute square roots? Explain.

// Answer

// Alyssa's friend answer works in a normal order language, since the expressions on the arguments are evaluated as they are needed and not immediately. However, Javascript is an applying order language, and it will try to evaluate the arguments on the "else" side of arguments, creating an infinite loop.
