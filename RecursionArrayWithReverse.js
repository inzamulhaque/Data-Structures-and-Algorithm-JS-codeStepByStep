const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = ["Alif", "IH", "MD"];
const arr3 = [3, 1, 7, 4, 6, 9, 5];

const customReverse = (arr, start, end) => {
  if (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    customReverse(arr, start + 1, end - 1);
  }
  return arr;
};

console.log(customReverse(arr1, 0, arr1.length - 1));
console.log(customReverse(arr2, 0, arr2.length - 1));
console.log(customReverse(arr3, 0, arr3.length - 1));
