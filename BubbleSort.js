const numbers = [54, 2, 6, 45, 84, 21, 54, 3, 54, 1, 98];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]; //used Temporary variable for Swap position
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
const result = bubbleSort(numbers);
console.log(result);
