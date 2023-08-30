const queue = [];
let currentSize = queue.length;
const maxSize = 5;

const enQueue = (newVal) => {
  if (currentSize >= maxSize) {
    console.log("queue is full");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
};

const deQueue = () => {
  if (currentSize === 0) {
    console.log("queue is empty");
  } else {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  }
};

const front = () => {
  if (currentSize > 0) {
    console.log("Front: " + queue[0]);
  } else {
    console.log("queue is empty");
  }
};

const rear = () => {
  if (currentSize > 0) {
    console.log("Rear: " + queue[currentSize - 1]);
  } else {
    console.log("queue is empty");
  }
};

enQueue(11);
enQueue(13);
enQueue(15);
enQueue(17);
enQueue(19);
enQueue(12);

front();
rear();

deQueue();
deQueue();
deQueue();

enQueue(25);
enQueue(27);
enQueue(29);

front();
rear();

console.log(queue);
