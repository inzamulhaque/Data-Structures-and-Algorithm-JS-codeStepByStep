const data1 = [33, 31, 7, 3, 23];
const data2 = [1, 11, 13, 7, 9];
const data3 = [101, 99, 999, 111, 9];

const SelectionSortAscendingOrder = (arr) => {
  let maxIndex;

  for (let i = 0; i < arr.length; i++) {
    maxIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    let temp = arr[maxIndex];
    arr[maxIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

console.log(SelectionSortAscendingOrder(data1));
console.log(SelectionSortAscendingOrder(data2));
console.log(SelectionSortAscendingOrder(data3));
