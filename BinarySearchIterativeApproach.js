const data1 = [1, 2, 3, 4];
const data2 = [1, 2, 3, 4, 5];
const data3 = [11, 21, 31, 41, 51, 61, 71, 81, 91];

const BinarySearchIterativeApproach = (arr, find) => {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let index = undefined;

  while (startIdx <= endIdx) {
    let mid = Math.floor((startIdx + endIdx) / 2);
    if (arr[mid] === find) {
      index = mid;
      break;
    } else if (arr[mid] < find) {
      startIdx = mid + 1;
    } else {
      endIdx = mid - 1;
    }
  }

  return { index, Item: find };
};

console.log(BinarySearchIterativeApproach(data1, 3));

console.log(BinarySearchIterativeApproach(data2, 5));

console.log(BinarySearchIterativeApproach(data3, 71));
