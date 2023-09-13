const data1 = [2, 6, 1, 3, 9, 8, 6];
const data2 = [3, 16, 1, 3, 9, 82, 36];
const data3 = [32, 16, 18, 31, 93, 28, 76];

const FindEvenMakeDoubleArrayLengthManually = (arr) => {
  const evenArray = [];
  const doubleArray = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
      doubleArray.push(arr[i] * 2);

      count++;
    }
  }

  return { evenArray, doubleArray, count };
};

console.log(FindEvenMakeDoubleArrayLengthManually(data1));
console.log(FindEvenMakeDoubleArrayLengthManually(data2));
console.log(FindEvenMakeDoubleArrayLengthManually(data3));
