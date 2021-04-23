let numbers = [5, 10, 12, 15, 19, 21, 22, 28, 35, 37, 45, 55, 62, 68, 78, 95];
const target = 37;

function binarySearch(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (numbers[mid] == target) {
      console.log("paise tore...Tor Index hoilo", mid);
      return mid;
    }
    if (numbers[mid] > target) {
      end = mid - 1;
    }
    if (numbers[mid] < target) {
      start = mid + 1;
    }
  }
  return "apni j Input deyasen shei ta array te KHuija pai nai Sorry Vai";
}

const result = binarySearch(numbers, 87);
console.log(result);
