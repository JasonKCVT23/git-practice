// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();// null

stack.push(5);
stack.push(8);
stack.size();// 2
stack.print();// 5, 8
stack.peek();// 8
stack.pop();// 8
stack.isEmpty();
stack.pop();// 5
stack.isEmpty(); // 此時stack應為空
stack.push(7);
stack.push(9);
stack.clear();
stack.isEmpty();// 此時stack應為空
