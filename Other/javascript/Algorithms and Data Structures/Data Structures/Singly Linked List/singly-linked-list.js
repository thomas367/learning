/**
 * Linked lists are a type of data structure that store values in the form of a list. 
 * Within the list, each value is considered a node, and each node is connected with 
 * the following value in the list (or null in case the element is the last in the list) 
 * through a pointer.
 * In singly linked lists each node has a single pointer that indicates the next 
 * node on the list.
 */

class SinglyLinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * The push method take in a value and add a node to the end 
     * of the linked list.
     * Then it returns the linked list.
     */ 
    push(value) {
        const newNode = new SinglyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        } 

        this.tail = newNode;
        this.length++;

        return this;
    }

    /**
     * The pop method removes a node at the end of the linked list.
     * Then it returns the node removed.
     */
    pop() {
        if (!this.head) {
            return undefined;
        }

        let removedNode;

        if (this.head === this.tail) {
            removedNode = this.head;
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;

            while (currentNode.next !== this.tail) {
                currentNode = currentNode.next;
            }

            removedNode = currentNode.next;
            currentNode.next = null;
            this.tail = currentNode;
        }

        this.length--;

        return removedNode;
    }

    /**
     * The shift method removes a node from the beginning of the linked list.
     * Then it returns the node removed.
     */
    shift() {
        if (!this.head) {
            return undefined;
        }

        const removedNode = this.head;

        if (this.head === this.tail) {
            this.tail = null;
        }

        this.head = removedNode.next;
        this.length--;

        return removedNode;
    }

    /**
     * The unshift method adds a new node to the beginning of the linked list.
     * Then it returns the linked list.
     */
    unshift(value) {
        this.head = new SinglyLinkedListNode(value, this.head);

        if (!this.length) {
            this.tail = this.head;
        }

        this.length++;

        return this;
    }

    /**
     * The get method finds a node at a specified given index in the linked list.
     * Then returns the found node.
     */
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let currentNode = this.head;

        for (let i = 1; i <= index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    /**
     * The set method accepts an index and a value and updates the value
     * of the node in the linked list at the index with the new value.
     * Then it returns true if the node was updated successfully,
     * or false if an invalid index was passed in (node not found).
     */
    set(index, value) {
        const node = this.get(index);

        if (!node) {
            return false;
        }

        node.value = value;

        return true;
    }

    /**
     * The insert method inserts a node at a specified given index in the linked list.
     * Then returns true if the index was valid, and false if the index was
     * invalid (less than 0 or greater than the length of the list).
     */
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return !!this.unshift(value);
        }

        if (index === (this.length - 1)) {
            return !!this.push(value);
        }

        const prevNode = this.get(index - 1);

        if (!prevNode) {
            return false;
        }

        prevNode.next = new SinglyLinkedListNode(value, prevNode.next);
        this.length++;

        return true;
    }

    /**
     * The remove method removes a node at a specified given index in a linked list.
     * Then returns the removed node, if the index was valid, or undefined if the index was invalid.
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === (this.length - 1)) {
            return this.pop();
        }

        const prevNode = this.get(index - 1);

        if (!prevNode) {
            return undefined;
        }

        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;

        return removedNode;
    }

    /**
     * The reverse method reverses the linked list in place.
     * Then it returns the linked list.
     */
    reverse() {
        let currentNode = this.head;
        let nextNode = currentNode.next;
        this.tail = currentNode;
        currentNode.next = null;

        while (nextNode) {
            let tempNode = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = tempNode;
        }

        this.head = currentNode;

        return this;
    }

    /**
     * The rotate method rotates all the nodes in the linked list by some number passed in.
     * Then it returns the linked list.
     */
    rotate(number) {
        const index = number < 0 ? number + this.length : number;

        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this;
        }

        const prevNode = this.get(index - 1);

        if (!prevNode) {
            return undefined;
        }

        this.tail.next = this.head;
        this.head = prevNode.next;
        this.tail = prevNode;
        prevNode.next = null;

        return this;
    }

    /**
     * This method prints the data of the linked list.
     */
    print() {
        if(!this.head) { 
            return console.log('List is empty'); 
        }

        const arr = [];
        let currentNode = this.head;

        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }

    /**
     * This method checks and returns if linked list is empty.
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * This method returns the size of the linked list.
     */
    linkedListSize() {
        return this.length;
    }
}

const singleLinkedList = new SinglyLinkedList();

singleLinkedList.push(1);
singleLinkedList.push(2);
singleLinkedList.push(3);
singleLinkedList.push(4);
singleLinkedList.push(5);
singleLinkedList.push(6);
singleLinkedList.print(); // [ 1, 2, 3, 4, 5, 6 ]
//--------------------------------------------------------------
singleLinkedList.pop();
singleLinkedList.print(); // [ 1, 2, 3, 4, 5 ]
//--------------------------------------------------------------
singleLinkedList.unshift(1000);
singleLinkedList.print(); // [ 1000, 1, 2, 3, 4, 5 ]
//--------------------------------------------------------------
singleLinkedList.shift();
singleLinkedList.print(); // [ 1, 2, 3, 4, 5 ]
//--------------------------------------------------------------
console.log(singleLinkedList.get(2).value); // 3
//--------------------------------------------------------------
singleLinkedList.set(2, 100);
console.log(singleLinkedList.get(2).value); // 100
singleLinkedList.print(); // [1, 2, 100, 4, 5 ]
//--------------------------------------------------------------
singleLinkedList.insert(3, 10000);
singleLinkedList.print(); // [ 1, 2, 100, 10000, 4, 5 ]
//--------------------------------------------------------------
singleLinkedList.remove(3);
singleLinkedList.print(); // [ 1, 2, 100, 4, 5 ]
//--------------------------------------------------------------
singleLinkedList.reverse();
singleLinkedList.print(); // [ 5, 4, 100, 2, 1 ]
//--------------------------------------------------------------
singleLinkedList.rotate(-2); // negative number rotate to right 
singleLinkedList.print(); // [ 2, 1, 5, 4, 100 ]
//--------------------------------------------------------------
singleLinkedList.rotate(3); // positive number rotate to left 
singleLinkedList.print(); // [4, 100, 2, 1, 5]
//--------------------------------------------------------------
