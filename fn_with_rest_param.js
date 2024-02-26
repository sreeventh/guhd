// function sum(...sree){
//     let sum = 0;
//     for(let i of sree){
//         sum+=i;
//     }
//     return sum;
// }

// let k = [1,2,3,5,4,4,4,];
// console.log(sum(...k));
// let s = sum(1,1,1,1,1);
// console.log(s);

const arr = [1,2,3];
const arr2 = [...arr,4,5,6];
console.log(arr2);
const arr3 = [4,5,6,...arr2]
console.log(arr3);