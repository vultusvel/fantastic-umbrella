// 232. Implement Queue using Stacks
class MyQueue {
  constructor() {
    this.inputStack = []; 
    this.outputStack = []; 
  }

  push(x) {
    this.inputStack.push(x);
  }

  pop() {
    this._transferIfNeeded();
    return this.outputStack.pop();
  }

  peek() {
    this._transferIfNeeded();
    return this.outputStack[this.outputStack.length - 1];
  }

  empty() {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }

  _transferIfNeeded() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
  }
}

const myQueue = new MyQueue();
myQueue.push(1);   
myQueue.push(2); 

//206. Reverse Linked List

