/*
2629. Function Composition

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    // Handle empty list of functions
    if (!functions.length) {
      return function (x) { return x; }; // Identity function
    }
  
    return function (x) {
      // Iterate through functions in reverse order
      for (const f of functions.reverse()) {
        x = f(x);
      }
      return x;
    };
  };
  
  /**
   * const fn = compose([x => x + 1, x => 2 * x])
   * fn(4) // 9
   */