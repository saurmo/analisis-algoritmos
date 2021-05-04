const LinkedListNode = require("./LinkedListNode");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let new_nodo = new LinkedListNode(value);

    if (!this.head) {
      this.head = new_nodo;
    }
    return this;
  }
}

module.exports = LinkedList;
