
let arr1 = [1, 2, 3, 4];

//////////////////////////////////////////////////////////////map

// console.log(arr1.map(function (a) {
    //     return a - 2;
    // }));
    
    // for(let i=0;i<4;i++){
        //     arr1[i] = arr1[i] - 2;
        // }
        // console.log(arr1);
        
        
///////////////////////////////////////////////////////////////filter
        
        
// console.log(arr1.filter(function(a){
//     return a%2!=0; 
// }));

// let newArr = [];
// for(let i=0;i<4;i++){
//     if(arr1[i]%2==0){
//         newArr.push(arr1[i])
//     }
// }
// console.log(newArr);


/////////////////////////////////////////////////////////////reduce

// const groc = {
//     rice: 100,
//     dal: 80,
//     salt: 10,
//     sugar: 20,
//     oil: 100
// };


// const price_list = Object.values(groc);
// console.log(price_list);
// // let tot = 0;
// // for(let i=0;i<price_list.length;i++){
// //     tot += price_list[i];
// // }
// // console.log(tot);

// // spread orp 

// const totPrice = price_list.reduce((tot,a)=>{
//    return tot += a;
// },0)
// console.log(totPrice);


const people = [
    {name:"sree",age:21},
    {name:"chinmay",age:22},
    {name:"shrinidhi",age:21},
    {name:"ryan",age:23}
]

// console.log(people);

// const s_ppl=people.filter((a)=>{
//     return a["name"].startsWith("s")
// })
// console.log(s_ppl);

// const s_ppl=people.filter((a)=>{
//     return a["age"]>=22
// })
// console.log(s_ppl);

const groupedByAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person["name"]);
    return acc;
}, {});

const pplExist = people.reduce((acc,a)=>{
    if(a.name.startsWith("y")){
        acc = true;
    }
    return acc;
},false)

// console.log(groupedByAge);
// console.log(Object.keys(groupedByAge)); 
// console.log(Object.values(groupedByAge)); 
console.log(pplExist);