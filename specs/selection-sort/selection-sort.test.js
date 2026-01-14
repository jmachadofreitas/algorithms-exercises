/*
  Write a selection sort here
  Name the function selectionSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`

  Scan for the minimum, swap forward (front of the array), repeat

  Note: To create visualization copy function's body to src/Sort.js and uncomment snapshot(nums). Run with npm start

*/

function selectionSort(nums) {
  for (let i=0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex] ) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      // Swap
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];

      // let tmp = nums[i];
      // nums[i] = nums[minIndex]
      // nums[minIndex] = tmp;
    }
  }
  return nums
}

// unit tests
// do not modify the below code
test("selection sort", function () {
  const t0 = [];
  selectionSort(t0);
  expect(t0).toEqual([]);
  const t1 = [1];
  selectionSort(t1);
  expect(t1).toEqual([1]);
  let t3 = [3,2,1];
  selectionSort(t3);
  expect(t3).toEqual([1,2,3]);
  let t2 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  selectionSort(t2);
  expect(t2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
