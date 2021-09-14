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
      while (items[i] < pivot_value) {
        i++;
      }
      while (items[j] > pivot_value) {
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
      console.log(index, left_position, rigth_position);
      if (left_position < index - 1) {
        quickSort(items, left_position, index - 1);
      }
      if (index < rigth_position) {
        quickSort(items, index, rigth_position);
      }
    }
    return items;
  };
  
  let items = [5, 8, 3];
  console.log(quickSort(items, 0, items.length - 1));