/**
 * QUICK SORT
 */

const swap = (items, left_position, rigth_position) => {
  const temp = items[left_position];
  items[left_position] = items[rigth_position];
  items[rigth_position] = temp;
};

/**
 *
 * @param {*} items
 * @param {*} left_position
 * @param {*} rigth_position
 */
const partition = (items, left_position, rigth_position) => {
  let pivot_value = items[Math.floor((left_position + rigth_position) / 2)];

  let i = left_position;
  let j = rigth_position;

  while (i <= j) {
    while (items[i].edad < pivot_value.edad) {
      i++;
    }
    while (items[j].edad > pivot_value.edad) {
      j--;
    }
    if (i <= j) {
      //Intercambiar las posiciones
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = (items, left_position, rigth_position) => {
  if (items.length > 1) {
    let index = partition(items, left_position, rigth_position);
    if (left_position < index - 1) {
      quickSort(items, left_position, index - 1);
    }
    if (index < rigth_position) {
      quickSort(items, index, rigth_position);
    }
  }
  return items;
};

module.exports = quickSort;
