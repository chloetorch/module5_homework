function checkArrayType(arr) {
   let arr1 = arr.map(e => typeof e);
   return [...new Set(arr1)].length === 1;
}

function checkArrayType1(arr) {
   return arr.every((e, i, a) => typeof e === typeof a[0]);
}

console.log(checkArrayType([3, 6, 7, '3']));
console.log(checkArrayType1([3, 6, 7, 3]));