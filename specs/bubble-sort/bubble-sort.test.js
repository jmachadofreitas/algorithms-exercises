/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order

  Note: To create visualization copy function's body to src/Sort.js and uncomment snapshot(nums). Run with npm start

*/


function bubbleSort(nums) {
  let swapped = true; // sentinel variable
  for (let it = 0; swapped; it++) {
    swapped = false;
    // snapshot(nums);
    for (let i = 0; i < nums.length - 1 - it; i++) {
      if (nums[i] > nums[i + 1]) {
        const tmp = nums[i];
        nums[i] = nums[i+1];
        nums[i + 1] = tmp;
        swapped = true;
      }
    }
  }
  // snapshot(nums);
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const t0 = [];
  bubbleSort(t0);
  expect(t0).toEqual([]);
  const t1 = [1];
  bubbleSort(t1);
  expect(t1).toEqual([1]);
  let t2 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  bubbleSort(t2);
  expect(t2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const t3 = [3,2,1];
  bubbleSort(t3);
  expect(t3).toEqual([1,2,3]);
});
