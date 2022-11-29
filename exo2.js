const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7, 8, 9];

let elemCommuns = getArrCommunsElems(arr1, arr2); // [3, 4, 5]

function getArrCommunsElems(arr1, arr2) {
  return arr2.filter((obj) => arr1.indexOf(obj) != -1);
}

console.log(elemCommuns);
