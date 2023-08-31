class Queue {
  constructor(size) {
    this.max = size;
    this.items = new Array(size);
    this.currentSize = 0;
    this.rear = -1;
    this.front = -1;
  }

  enQueue = (newVal) => {
    if (this.currentSize !== this.max) {
      if (this.rear === this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }

      this.items[this.rear] = newVal;
      this.currentSize++;

      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  };
}

const queue1 = new Queue(5);

queue1.enQueue(1);
queue1.enQueue(2);
queue1.enQueue(3);
queue1.enQueue(4);
queue1.enQueue(5);
queue1.enQueue(6);
queue1.enQueue(7);

console.log(queue1.items);
