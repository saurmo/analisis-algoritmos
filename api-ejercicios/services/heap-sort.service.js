let arrLength = 0;

const heapSort = (input) => {
  arrLength = input.length;
  // iteración 1
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
  //Condición 1
  if (left < arrLength && input[left].edad > input[max].edad) {
    max = left;
  }
  //Condición 2

  if (right < arrLength && input[right].edad > input[max].edad) {
    max = right;
  }
  //condición 3
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

module.exports = heapSort;
