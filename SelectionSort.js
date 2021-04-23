const numbers = [54, 2, 6, 45, 84, 21, 54, 3, 54, 1, 98];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
const result = selectionSort(numbers);
console.log(result);
