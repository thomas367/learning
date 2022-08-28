/**
 * Heaps are another type of tree that have some particular rules. There are two main types of heaps, 
 * MaxHeaps and MinHeaps. In MaxHeaps, parent nodes are always greater than its children.
 * In this data structure there're no guarantees between siblings, meaning that nodes at the same 
 * "level" don't follow any rule besides being higher/lower than their parent.
 */

class MaxBinaryHeap {
    constructor() {
        this.values =[];
    }

    // Th einsert method adds a new value to  the heap.
    insert(value) {
        this.values.push(value);

        // Bubbling Up - Moving new value constantly to the top replacing its parents 
        // only if the it is bigger than them.
        let index = this.values.length - 1;
        let parentIndex = Math.floor( (index - 1)/2 );

        while (this.values[parentIndex] < this.values[index]) { 
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor( (index - 1)/2 );
        }

        return this.values;
    }

    // The extractMax method removes the biggest value from the heap
    extractMax() {
        if(this.values.length === 0) {
            return false;
        }

        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        this.values.pop();        
        let parentIndex = 0;

        while (true) {
            let leftChildIdx = 2 * parentIndex + 1;
            let rightChildIdx = 2 * parentIndex + 2;

            if(this.values[parentIndex] < this.values[leftChildIdx] && this.values[leftChildIdx] > this.values[rightChildIdx]) {
                [this.values[parentIndex], this.values[leftChildIdx]] = [this.values[leftChildIdx], this.values[parentIndex]];
                parentIndex = leftChildIdx;
            } else if(this.values[parentIndex] < this.values[rightChildIdx] && this.values[leftChildIdx] < this.values[rightChildIdx]) {
                [this.values[parentIndex], this.values[rightChildIdx]] = [this.values[rightChildIdx], this.values[parentIndex]];
                parentIndex = rightChildIdx;
            } else {
                break;
            }   
        }

        return this.values;
    }

    // The peek method returns the value of "top" element.
    peek(){
        return this.values[0];
    }

    // The heapSize method returns the size of heap.
    heapSize() {
        return this.values.length;
    }
}
