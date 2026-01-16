/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {

  if (nums.length <= 1) {
    return nums;
  }

  // Choose pivot
  const pivot = nums[0];

  // Split values
  const left = [];
  const right = [];
  for (let i = 1; i < nums.length; i++) {
    if (pivot >= nums[i]) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  // return quickSort(left).concat(pivot, quickSort(right));

  // spread operator
  return [...quickSort(left), pivot,...quickSort(right)]; 
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  let input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  let answer = quickSort(input);
  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  let ans = quickSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  nums = [];
  ans = quickSort(nums);
  expect(ans).toEqual([]);
  nums = [10];
  ans = quickSort(nums);
  expect(ans).toEqual([10]);
  nums = [10, 5];
  ans = quickSort(nums);
  expect(ans).toEqual([5, 10]);
});
