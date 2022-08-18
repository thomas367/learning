/**
 * Same as Queue but allocates each element by priority and it will
 * be sorted according to the priority level.
 */

class PriorityQueueNode {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queueItems = [];
    }

    /**
     * We create a queueElement with an element property and priority.
     * Then iterate over the queue to find the correct position of the queueElement based 
     * on its priority and add an element to the queue according to its priority.
     */  
    enqueue(value, priority) {
        let queueElement = new PriorityQueueNode(value, priority);
        let contain = false;

        for (let i = 0; i < this.queueItems.length; i++) {
            if (this.queueItems[i].priority > queueElement.priority) {
                this.queueItems.splice(i, 0, queueElement);
                contain = true;
                break;
            }
        }
        /* if the input element has the highest priority push it to end of the queue */
        if (!contain) {
            this.queueItems.push(queueElement);
        }
    }

    /**
     * This function removes an element from the front of a queue since the 
     * element with the highest priority is stored at the front of the priority queue.
     */ 
    dequeue() {
        /* returns the removed element from priority queue. */
        if (this.isEmpty()) {
            return "No elements present in Queue";
        }
        return this.queueItems.shift();
    }

    // The queueSize method returns the size of priority queue.
    priorityQueueSize() {
        return this.queueItems.length;
    }
  
    // Checks if priority queue is empty.
    isEmpty() {
        return this.queueItems.length === 0;
    }
}


const pQueue = new PriorityQueue();
pQueue.isEmpty(); // true

pQueue.enqueue('cat', 1);
pQueue.enqueue('dog', 2);
pQueue.enqueue('fish', 3);
pQueue.enqueue('rat', 4);
pQueue.enqueue('horse', 5);
pQueue.enqueue('squirrel', 6);
pQueue.enqueue('snake', 2);

pQueue.isEmpty(); // false
pQueue.priorityQueueSize(); // 7
pQueue.dequeue(); // removes cat
