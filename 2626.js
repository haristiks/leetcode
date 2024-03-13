/*
2626. Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

 

Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.
 

Constraints:

0 <= nums.length <= 1000
0 <= nums[i] <= 1000
0 <= init <= 1000
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let accum = init;
  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }
  return accum;
};

/*
Intuition
Recognize that the task involves iteratively applying a function to produce a final value based on an initial value and array elements.
Key idea: Maintain an accumulator to track the current state of the calculation and update it with each element and the user-defined function.
Approach
Initialize:
Create a variable accum and assign it the initial value init.
Iterate:
Use a for loop to iterate through each element in the nums array.
Apply function:
Inside the loop, apply the fn function to the current accum value and the current array element.
Store the returned value back into accum to update the accumulator.
Return result:
After the loop completes, return the final value of accum.
Handle empty array:
If the array is empty (nums.length === 0), return the initial value init.
Complexity
Time complexity:
O(n), where n is the length of the nums array.
We iterate through each element once.
Space complexity:
O(1), constant space for variables accum, i, and nums.
*/
