import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  // snapshot(nums);

  // bubblesort
  let swapped = true; // sentinel variable
  for (let it = 0; swapped; it++) {
    swapped = false;
    snapshot(nums);
    for (let i = 0; i < nums.length - 1 - it; i++) {
      if (nums[i] > nums[i + 1]) {
        const tmp = nums[i];
        nums[i] = nums[i+1];
        nums[i + 1] = tmp;
        swapped = true;
      }
    }
  }
  snapshot(nums);

  // insertSort

}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
