let arrLength = 0;

const heapSort = (input) => {
  arrLength = input.length;
  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    maxHeap(input, i);
  }

  for (i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrLength--;

    maxHeap(input, 0);
  }

  return input;
};

const maxHeap = (input, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrLength && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    maxHeap(input, max);
  }
};

const swap = (input, indexA, indexB) => {
  const temp = input[indexA];
  input[indexA] = input[indexB];
  input[indexB] = temp;
};

console.time("HEAP SORT");
const list = [4, 2, 3, 1, 5, 4];
const sorted = heapSort(list);
console.log(sorted);
console.timeEnd("HEAP SORT");
