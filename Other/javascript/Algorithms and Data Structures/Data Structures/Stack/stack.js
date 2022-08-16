/**
 * Stacks are a data structure that store information in the form of a list.
 * They allow only adding and removing elements under a LIFO pattern (last in, first out).
 * In stacks, elements can't be added or removed out of order, they always have to follow 
 * the LIFO pattern.
 */

class StackNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    // The stack has three properties, the first node, the last node and the stack size.
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // The push method receives a value and adds it to the "top" of the stack.
    push(val) {
        const newNode = new StackNode(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }

    // The pop method eliminates the element at the "top" of the stack and returns its value.
    pop() {
        if (!this.first) {
            return null;
        }

        const temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    // The peek method returns the value of "top" element.
    peek() {
        if (this.isEmpty()) {
            throw new Error('This stack is empty');
        }

        return this.first.value;
    }

    // Checks if stack is empty.
    isEmpty() {
        return this.size === 0;
    }

    // The stackSize method returns the size of stack.
    stackSize() {
        return this.size;
    }
}

const stck = new Stack();

stck.push("value1");
stck.push("value2");
stck.push("value3");

console.log(stck.first); 
/** 
 *  Node {
 *      value: 'value3',
 *      next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
 *  }
 */

console.log(stck.stackSize()); // 3
console.log(stck.isEmpty()); // false
console.log(stck.peek()); // value3

stck.push("value4");
console.log(stck.pop()); // value4
