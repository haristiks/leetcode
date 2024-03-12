/*
2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 */

/*
Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
*/

//Solution

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const result = [];
  for (let x in arr) {
    result.push(fn(arr[x],x*1));
  }
  return result;
};



/*
Intuition

The first thought is to iterate through the original array and apply the provided function fn to each element. Since we cannot use Array.map, we'll achieve this using a traditional for loop.

Approach

1. We create a new empty array result to store the transformed elements.
2. We iterate through the original array arr using a for loop.
3. Inside the loop, for each element arr[x], we call the function fn with two arguments:
  The current element arr[x].
  The current index x. Note that we convert x to a number using x * 1 because for...in loops iterate over indices as strings by default.
4. The result of fn(arr[x], x) is pushed into the result array.
5. Finally, we return the result array containing the transformed elements.
Complexity

Time Complexity: O(n), where n is the length of the input array. This is because we iterate through the entire array once using the for loop.
Space Complexity: O(n), since we create a new array result to store the transformed elements.
*/