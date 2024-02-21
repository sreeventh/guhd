function sum(...sree){
    let sum = 0;
    for(let i of sree){
        sum+=i;
    }
    return sum;
}

let k = [1,2,3,5,4,4,4,];
console.log(sum(...k));
let s = sum(1,1,1,1,1);
console.log(s);