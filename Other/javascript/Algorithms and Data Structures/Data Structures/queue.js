/**
 * Queues work in a very similar way to stacks, but elements follow a different 
 * pattern for add and removal. Queues allow only a FIFO pattern (first in, first out).
 * In queues, elements can't be added or removed out of order, they always 
 * have to follow the FIFO pattern.
 */

class QueueNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    // The queue has three properties, the first node, the last node and the queue size
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // The enqueue method receives a value and adds it to the "end" of the queue
    enqueue(val) {
        const newNode = new QueueNode(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    // The dequeue method eliminates the element at the "beginning" of the queue and returns its value
    dequeue() {
        if (!this.first) {
            return null;
        }

        const removedNode = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;

        return removedNode.value;
    }

    // The queueSize method returns the size of queue.
    queueSize() {
        return this.size;
    }
  
    // Checks if queue is empty.
    isEmpty() {
        return this.size === 0;
    }
  
    // The peek method returns the value of first element.
    peek() {
        if (this.isEmpty()) {
            throw new Error("The queue is empty");
        }
  
        return this.first.value;
    }
}

const queueObj = new Queue();

queueObj.enqueue("value1");
queueObj.enqueue("value2");
queueObj.enqueue("value3");

console.log(queueObj.first); 
/** 
 *  Node {
 *      value: 'value1',
 *      next: Node { value: 'value2', next: Node { value: 'value3', next: null } }
 *  }
 */
console.log(queueObj.QueueSize()); // 3
console.log(queueObj.isEmpty()); // false
console.log(queueObj.peek()); // value1

queueObj.enqueue("value4");
console.log(queueObj.dequeue()); // value1
