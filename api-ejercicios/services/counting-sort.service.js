/**
 * COUNTING SORT
 */

const countingSort = (items, min, max) => {
  let i = min;

  let sizeCountArray = max + 1;
  let countArray = [];
  let itemsTemp = [];
  // Crear el vector inicializandolo con los ceros
  for (i; i < sizeCountArray; i++) {
    countArray[i] = 0;
  }

  // Recorrer y contar los elementos del vector inicial
  let size = items.length;
  for (let i = 0; i < size; i++) {
    let element = items[i].edad;
    countArray[element] += 1;
    if (Array.isArray(itemsTemp[element])) {
      itemsTemp[element].push(items[i]);
    } else {
      itemsTemp[element] = [];
      itemsTemp[element].push(items[i]);
    }
  }

  // Ordernar los elementos de acuerdo al countArray
  let j = 0;
  for (i = min; i < sizeCountArray; i++) {
    while (countArray[i] > 0) {
      items[j] = itemsTemp[i][countArray[i] - 1];
      j++;
      countArray[i]--;
    }
  }

  return items;
};

module.exports = countingSort;
