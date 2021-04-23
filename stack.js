class Stack {
  constructor() {
    this.stack = [];
  }
  add(item) {
    this.stack.push(item);
  }
  remove() {
    if (this.stack.length) {
      return this.stack.pop();
    }
  }
}

const guest = new Stack();
guest.add("ami");
guest.add("tomai");
guest.add("Valobashi");
console.log(guest.stack);

const speaker = guest.remove();
const speakers = guest.remove();
console.log(speakers);

console.log(guest.stack);
