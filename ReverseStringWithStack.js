const data = [];
let currentSize = data.length;

const push = (newVal) => {
  data[currentSize] = newVal;
  currentSize++;
};

const convertStringToArray = (str) => {
  const strArr = [];

  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i]);
  }

  return strArr;
};

const reverseArr = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    push(str[i]);
  }
};

const convertArrayToString = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
};

let str = "Alif";
str = convertStringToArray(str);
reverseArr(str);
const result = convertArrayToString(data);

console.log(data);
console.log(result);
