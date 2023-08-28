const data = [];
let currentSize = data.length;

const push = (newVal) => {
  data[currentSize] = newVal;
  currentSize++;
};

const pop = () => {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  }
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

let str = "Alif";
str = convertStringToArray(str);
reverseArr(str);

console.log(data);
