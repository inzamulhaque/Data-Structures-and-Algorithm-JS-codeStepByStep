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
    } else {
      console.log("Queue is full");
    }
  };

  deQueue() {
    if (this.currentSize !== 0) {
      this.items[this.front] = null;

      if (this.front === this.max - 1) {
        this.front = 0;
      } else {
        this.front++;
      }

      this.currentSize--;
    } else {
      this.front = -1;
      this.rear = -1;
      console.log("Queue is empty");
    }
  }
}

const queue1 = new Queue(5);

queue1.enQueue(1);
queue1.enQueue(2);
queue1.enQueue(3);
queue1.enQueue(4);
queue1.enQueue(5);
queue1.enQueue(6);
queue1.enQueue(7);

queue1.deQueue();

queue1.enQueue(7);
queue1.enQueue(9);

console.log(queue1.items);
