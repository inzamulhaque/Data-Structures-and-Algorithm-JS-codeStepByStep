class Stack {
  item = [];
  currentSize;
  maxSize;
  constructor(maxSizeVal) {
    this.maxSize = maxSizeVal;
    this.currentSize = this.item.length;
  }

  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.log("stack is full");
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }

  pop() {
    if (this.currentSize !== 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    }
  }
}

const stack = new Stack(5);
stack.push(11);
console.log(stack.item);
stack.pop();
stack.pop();
stack.push(11);
stack.push(11);
stack.push(11);
stack.push(11);
stack.push(11);
stack.push(11);
console.log(stack.item);
