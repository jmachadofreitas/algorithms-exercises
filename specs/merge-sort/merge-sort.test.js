/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

function merge(left, right) {
  // Simple implementation without indexes
  let res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift: dequeu or pop from front 
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return res.concat(left, right);
}

const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  let ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  nums = [];
  ans = mergeSort(nums);
  expect(ans).toEqual([]);
  nums = [10];
  ans = mergeSort(nums);
  expect(ans).toEqual([10]);
  nums = [10, 5];
  ans = mergeSort(nums);
  expect(ans).toEqual([5, 10]);
});
