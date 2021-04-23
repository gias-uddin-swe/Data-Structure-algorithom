class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
  add(value) {
    const newNode = new Node(value);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const head = new Node("AKhashhhhhh");
const mBondhon = new LinkedList(head);
mBondhon.add("Akash");
mBondhon.add("modna");
mBondhon.add("LUCU");
console.log(JSON.stringify(mBondhon));
