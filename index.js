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

// 53. Maximum Subarray

const maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0]; 
 
   nums.slice(1).reduce((acc, num) => {
     currentSum = Math.max(num, acc + num); 
     maxSum = Math.max(maxSum, currentSum);
     return currentSum;
   }, currentSum);
 
   return maxSum;
};

 // 1. Two Sum
const twoSum = function(nums, target) {
    const numMap = new Map(); 
  
    let result = []; 
  
    nums.forEach((num, i) => {
      const complement = target - num; 
  
      if (numMap.has(complement)) {
        result = [numMap.get(complement), i];
      }
  
      numMap.set(num, i);
    });
  
    return result;
};
  
//206. Reverse Linked List
const reverseList = (head) => {
    if (head === null || head.next === null) {
      return head;
    }
  
    const newHead = reverseList(head.next);
  
    head.next.next = head;
    head.next = null;
  
    return newHead;
};
  
//100. Same Tree
const isSameTree = function(p, q) {
    const queue = [[p, q]];
  
    while (queue.length > 0) {
      const [node1, node2] = queue.shift();

        if (!node1 && !node2) continue;
        if (!node1 || !node2 || node1.val !== node2.val) return false;

        queue.push([node1.left, node2.left]);
        queue.push([node1.right, node2.right]);
    }
  
    return true;
};
  