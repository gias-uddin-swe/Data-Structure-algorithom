class Dictionary {
  constructor() {
    this.dictionary = {};
  }
  add(key, value) {
    this.dictionary[key] = value;
  }
  get(key) {
    return this.dictionary[key];
  }
}

const phoneBook = new Dictionary();
phoneBook.add("mahi", 01245147);
phoneBook.add("porimoni", 012125147);
phoneBook.add("purnima", 02145147);
console.log(phoneBook.dictionary);

const result = phoneBook.get('mahi');
console.log(result);
