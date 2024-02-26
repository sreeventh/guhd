// const pd = {
//     id: 15,
//     name: "sree",
//     age: 21,
//     dob: "05/10/2002",
//     designation: "sde intern",
//     date: new Date,
//     dayFn: function(){ console.log("bday is " + this.dob.slice(0, 2)) }
// }

// console.log(pd["name"]);
// console.log(pd.name);
// console.log("--------------------------------------------------------");
// console.log(pd);
// console.log("--------------------------------------------------------");
// let pd_text = "";
// for (let x in pd) {
//     pd_text += pd[x] + " ";
// }
// console.log(pd_text);
// console.log("--------------------------------------------------------");
// pd.nationality = "Indian";
// pd["sex"] = "Male";
// console.log(pd);
// pd.dayFn();
// console.log("--------------------------------------------------------");
// // delete pd.id;
// // delete pd["id"];
// const arrK = Object.keys(pd);
// console.log("keys of pd are: "+arrK);
// console.log("values of pd are:"+Object.values(pd));
// console.log("----------------------JSon Stringify----------------------------------");
// // console.log(JSON.stringify(pd));
// console.log(pd.id.toString());


/////////////////////////////////////////////////////////////// object constructors///////////////////////////////////////////

// function Pd(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.sentence = () => { console.log("My name is " + this.name + " and I'm " + this.age + " years old."); }
//     this.changeAge = function (a) {
//         this.age = a;
//     }
// }
// const e1 = new Pd("Sree", 21, "Male");
// const e2 = new Pd("Chinmay", 21, "Male");

// // console.log(e1,e2);
// // console.log(JSON.stringify(e1));
// // e1.changeAge(22);
// // e1.sentence();

// class home {
//     constructor(furniture, price, area) {
//         this.furniture = furniture;
//         this.price = price;
//         this.area = area;
//     }
//     tf(a) {
//         this.furniture = a;
//     }
// }

// const h1 = new home(true, 1000, "yeshwantpur")

// console.log(h1);

// function hom(furniture, price, area) {
//     this.furniture = furniture;
//     this.price = price;
//     this.area = area;
//     this.tf = function (a) {
//         this.furniture = a;
//     }

// }

// const h3 = new hom(true, 2000, "jayanagar")
// console.log(h3);

// // h3.tf(false);
// // console.log(h3);

// h1.tf(false)
// console.log(h1);

// const culture = {
//     lang:"en",
//     place:"usa",
//     get deets(){
//         return this.lang+this.place;
//     },
//     set lang(a){
//         this.lang=a;
//     }
// }

////////////////////////////////////////////////////////////////

// const personal = {
//     id:1,
//     name:"sree"
// }

// const x = personal;

// x["sex"] = "male";

// console.log(personal);

////////////////////////////////////////////////////////class inheritance//////////////////////////////

// class Car{
//     constructor(brand){
//         this.brand = brand;
//     }
//     present(){
//         return ("I have a "+this.brand); 
//     }
// }

// class Model extends Car{
//     constructor(brand,mod){
//         super(brand);
//         this.mod = mod;
//     }
//     pr(){
//        console.log(this.present(),this.mod); 
//     }
// }

// const myCar = new Model("ford","figo");
// myCar.pr();

// A JavaScript class is not an object.
// It is a template for JavaScript objects.



///////////////////////////////////////////var let const/////////////////////////////////////////

// var can be used before declaration also
// it is function scoped or globally scoped

// var x = 10;
// function example() {
//     var y = 20;
//     if (true) {
//         var z = 30;
//     }
//     console.log(x); // 10
//     console.log(y); // 20
//     console.log(z); // 30
// }
// let x = 10;
// function example() {
    
//     let y = 20;
//     if (true) {
//         let z = 30;
//     }
//     console.log(x); // 10
//     console.log(y); // 20
//     console.log(z); // 30
// }
// const x = 10;
// function example() {
    
//     let y = 20;
//      y = 30;
//     console.log(x); // 10
//     console.log(y); // 20
// }
// example();

////////////////////////////////////////////////object reference/////////////////////////////////////////////


