const numbers = [54, 2, 6, 45, 84, 89, 21, 54, 3, 54, 1, 98];
function linearSearch(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element == 89) {
      return i;
    }
  }
}

const result = linearSearch(numbers);
console.log(result);
