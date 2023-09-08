const data1 = [1, 2, 3, 4];
const data2 = [1, 2, 3, 4, 5];
const data3 = [11, 21, 31, 41, 51, 61, 71, 81, 91];

const BinarySearchRecursiveApproach = (arr, find, start, end) => {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == find) {
      return { Index: mid, Item: find };
    } else if (arr[mid] < find) {
      return BinarySearchRecursiveApproach(arr, find, mid + 1, end);
    } else {
      return BinarySearchRecursiveApproach(arr, find, start, mid - 1);
    }
  } else {
    return null;
  }
};

console.log(BinarySearchRecursiveApproach(data1, 3, 0, data1.length - 1));

console.log(BinarySearchRecursiveApproach(data2, 5, 0, data2.length - 1));

console.log(BinarySearchRecursiveApproach(data3, 7, 0, data3.length - 1));
