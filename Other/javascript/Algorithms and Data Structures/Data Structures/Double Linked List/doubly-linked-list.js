/**
 * Linked lists are a type of data structure that store values in the form of a list. 
 * Within the list, each value is considered a node, and each node is connected with 
 * the following value in the list (or null in case the element is the last in the list) 
 * through a pointer. 
 * In double linked lists, each node has two pointers, one pointing to the next 
 * node and another pointing to the previous node.
 */

class DoublyLinkedListNode {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
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
        const newNode = new DoublyLinkedListNode(value, null, this.tail);
        if (!this.head) {
            this.head =newNode;
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

        const removedNode = this.tail;
        this.tail = removedNode.prev;
        removedNode.prev = null;
        this.length--;

        if (!this.length) {
            this.head = null;
        } else {
            this.tail.next = null;
        }

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
        this.head = removedNode.next;
        removedNode.next = null;
        this.length--;

        if (!this.length) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }

        return removedNode;
    }

    /**
     * The unshift method adds a new node to the beginning of the linked list.
     * Then it returns the linked list.
     */
    unshift(value) {
        const newNode = new DoublyLinkedListNode(value, this.head);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
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

        if (index === 0) {
            return this.head;
        }

        if (index === (this.length - 1)) {
            return this.tail;
        }

        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return currentNode;
            }
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
        if (index < 0 || index >= this.length) {
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

        const newNode = new DoublyLinkedListNode(value, prevNode.next, prevNode);
        prevNode.next = newNode;
        newNode.next.prev = newNode;
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

        const removedNode = this.get(index);
    
        if (!removedNode) {
            return undefined;
        }

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
    
        return removedNode;
      }
    
    /**
     * The reverse method reverses the linked list in place.
     * Then it returns the linked list.
     */
    reverse() {
        let currentNode = this.head;
        const tail = this.tail;

        while (currentNode) {
            [currentNode.next, currentNode.prev] = [currentNode.prev, currentNode.next];
            currentNode = currentNode.prev;
        }

        this.tail = this.head;
        this.head = tail;

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

        const node = this.get(index);

        if (!node) {
            return undefined;
        }

        this.tail.next = this.head;
        this.head.prev = this.tail;
        this.head = node;
        this.tail = node.prev;
        this.tail.next = null;
        this.head.prev = null;

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

const doubleLinkedList = new SinglyLinkedList();

doubleLinkedList.push(1);
doubleLinkedList.push(2);
doubleLinkedList.push(3);
doubleLinkedList.push(4);
doubleLinkedList.push(5);
doubleLinkedList.push(6);
doubleLinkedList.print(); // [ 1, 2, 3, 4, 5, 6 ]
//--------------------------------------------------------------
doubleLinkedList.pop();
doubleLinkedList.print(); // [ 1, 2, 3, 4, 5 ]
//--------------------------------------------------------------
doubleLinkedList.unshift(1000);
doubleLinkedList.print(); // [ 1000, 1, 2, 3, 4, 5 ]
//--------------------------------------------------------------
doubleLinkedList.shift();
doubleLinkedList.print(); // [ 1, 2, 3, 4, 5 ]
//--------------------------------------------------------------
console.log(doubleLinkedList.get(2).value); // 3
//--------------------------------------------------------------
doubleLinkedList.set(2, 100);
console.log(doubleLinkedList.get(2).value); // 100
doubleLinkedList.print(); // [1, 2, 100, 4, 5 ]
//--------------------------------------------------------------
doubleLinkedList.insert(3, 10000);
doubleLinkedList.print(); // [ 1, 2, 100, 10000, 4, 5 ]
//--------------------------------------------------------------
doubleLinkedList.remove(3);
doubleLinkedList.print(); // [ 1, 2, 100, 4, 5 ]
//--------------------------------------------------------------
doubleLinkedList.reverse();
doubleLinkedList.print(); // [ 5, 4, 100, 2, 1 ]
//--------------------------------------------------------------
doubleLinkedList.rotate(-2); // negative number rotate to right 
doubleLinkedList.print(); // [ 2, 1, 5, 4, 100 ]
//--------------------------------------------------------------
doubleLinkedList.rotate(3); // positive number rotate to left 
doubleLinkedList.print(); // [4, 100, 2, 1, 5]
//--------------------------------------------------------------
