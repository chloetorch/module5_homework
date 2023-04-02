let arr = [1, 5, 6, 4, 78, 5, 1, 0, 6, 5, '5'];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
   if (typeof (arr[i] == 'number') && !isNaN(arr[i])) {
      if (arr[i] == 0); {
         zeroCount++;
      } else if (arr[i] % 2 === 0) {
         evenCount++;
      } else if (arr[i] % 2 !== 0) {
         oddCount++;
      } else {
         otherCount++;
      }
   }
}