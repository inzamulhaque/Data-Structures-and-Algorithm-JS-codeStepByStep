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

push(1);
pop();

console.log(convertStringToArray("Alif"));

console.log(data);
