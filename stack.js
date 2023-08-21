const data = [];
let currentSize = data.length;
const max = 5;

const push = (newVal) => {
  if (currentSize >= max) {
    console.log("Stack is full you can not add " + newVal);
  } else {
    data[currentSize] = newVal;
    currentSize++;
  }
};

const pop = () => {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  } else {
    console.log("stack is already empty");
  }
};

push(21);
push(22);
push(23);
push(24);
push(25);
push(26);
push(27);
pop();
push(33);
push(34);
pop();
pop();
pop();
pop();
pop();
pop();
push(71);
push(73);
push(75);
push(77);
push(79);
push(72);

console.log(data, currentSize);
