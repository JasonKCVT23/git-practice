// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
        // #為javascript中，聲明私有變數的語法
    // 除了在變數前加#外，以前會在變數前加_，但這是一種約定俗成的用法 ，並非正式語法
  #items;

  constructor() {
      this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
      let newNode = new Node(element);
      if(!this.#items.first){
          this.#items.first = newNode;
          this.#items.last = newNode;
      }
      else{
          let temp = this.#items.first;
          this.#items.first = newNode;
          this.#items.last = temp;
      }

      return ++this;

  }

  // 移除並回傳 stack 頂部的元素
  pop() {
      if(!this.#items.first){
          return null;
      }

      let temp = this.#items.first;

      if(this.#items.first === this.#items.last)[
          this.#items.last = null;
      ]

      this.#items.first = this.#items.first.next;

      return temp.value;
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
      return #items[#items.length-1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
      return #items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
      return #items.length;
  }

  // 清空 stack
  clear() {
      #items = [];
  }

  // 印出 stack 內容
  print() {
      console.log(#items.toString());
  }
}
