const data1 = [11, 13, 12, 15, 3, 17, 5];
const data2 = [1, 11, 13, 7, 9];
const data3 = [101, 99, 999, 111, 9];

const InsertionSortAscendingOrder = (arr) => {
  let currentElement, j;

  for (let i = 0; i < arr.length; i++) {
    currentElement = arr[i];

    j = i - 1;

    while (j >= 0 && currentElement < arr[j]) {
      arr[j + 1] = arr[j];

      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
};

console.log(InsertionSortAscendingOrder(data1));
console.log(InsertionSortAscendingOrder(data2));
console.log(InsertionSortAscendingOrder(data3));
