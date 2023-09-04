const data = [3, 1, 9, 7, 4, 2, 12, 11, 17, 71];

const search = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      return { index: i, item: data[i] };
    }
  }

  return "item not found";
};

console.log(search(9));
console.log(search(1));
console.log(search(99));
console.log(search(3));
console.log(search(71));
