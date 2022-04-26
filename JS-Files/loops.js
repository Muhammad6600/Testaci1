var obj ={
    name: "Qasim",
    age: 15,
    class: "9th"
}

// for  in loop
// var test = "";
// for(var key in obj){
// test += key
//     console.log(`key in obj ${key}`)
//     console.log(obj[key])
// }

// for(var x in arr){
//     console.log(x)
//     console.log(arr[x])
// }

// forEach loop
let arr3 = ["val1", "val2", "val3", "val4"];
arr3.forEach(myFunc);

function myFunc(x,y,z){
    console.log(x)
}

// for of loop
// let txt = "text"
// for(let x of txt){
//     console.log(x)
// }

// while loop
let b = 0;
// while(b < 10){
//     console.log(`this number is ${b}`)
//     b++;
// }

// do loop
// do{
//     console.log(`this number is ${b}`)
//     b++;
// }while(b < 10)

// math function
// console.log(Math.PI)
// console.log(Math.round(4.4))
// console.log(Math.ceil(3.5))
// console.log(Math.floor(-4.2))
// console.log(Math.trunc(4.2))
// console.log(Math.sign(4))
// console.log(Math.E)

// var x = 3;
// var y = 2;
// console.log(x = y)
// console.log(y = x)
// console.log(x + y - x)
// console.log(y + x - y)

const m = prompt("");
for(let i = 1; i <=10; i++){
    var answer = i *m
    console.log(`${m} * ${i} = ${answer}`)
}