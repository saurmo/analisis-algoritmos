/**
 * COUNTING SORT
 */

const countingSort = (items, min, max) => {
  let i = min;

  let sizeCountArray = max + 1;
  let countArray = [];
  // Crear el vector inicializandolo con los ceros
  for (i; i < sizeCountArray; i++) {
    countArray[i] = 0;
  }

  // Recorrer y contar los elementos del vector inicial
  let size = items.length;
  for (let i = 0; i < size; i++) {
    let element = items[i];
    countArray[element] += 1;
  }

  // Ordernar los elementos de acuerdo al countArray
  let j = 0;
  for (i = min; i < sizeCountArray; i++) {
    while (countArray[i] > 0) {
      items[j] = i;
      j++;
      countArray[i]--;
    }
  }

  return items;
};

let items = [5, 8, 3, 3];
console.log(countingSort(items, 3, 8));
