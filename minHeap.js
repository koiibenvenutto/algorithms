class minHeap {
  constructor() {
    this.heap = [];
  }

  insert(n) {
    this.heap.push(n);
    this.heapifyUp();
  }

  extractMin() {
    // Remove and return the minimum element and then perform heapifyDown
    if (this.heap.length === 0) {
      return null;
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  peek() {
    return this.heap[0];
  }

  heapifyUp() {
    // This is going to need to be a loop

    //  First we're setting the index variable equal to the index of the last value in the heap, this is the bottom left most value
    let index = this.heap.length - 1;

    // Now we're making a loop that will compare that value at the bottom of the heap with its parent and if it's smaller it will swap them. Then repeat that until it is larger than its parent. So it moves up the binary tree/heap essentially until it's larger than its parent.
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    // Used after removing the root/min element and replacing it with the last element in the heap
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.heap[this.getRightChildIndex(index)] !== undefined &&
        this.heap[this.getRightChildIndex(index)] <
          this.heap[this.getLeftChildIndex(index)]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] >= this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  getSize() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getParentIndex(i) {
    Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }
}

const array = [1, 2, 3];

const minHeap1 = new minHeap(array);
