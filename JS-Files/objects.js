let car = {
    first: "Muhammad",
    last: "Qasim",
    fullName: function(){
        return this.first+ "" + this.last;
    }
};
console.log(car)

// Conditions
// function myNum(){
//     console.log('Your Age')
// }
// var age = 14;
// if (age <= 17)
// {
    // when true
//     console.log('Allowed')
// }else{
    // when false
//     console.log('Come In')
// }
// var age = prompt("Please Enter Your Age",17);

// date
var d = new Date()
console.log(d.getDay())
let day;
switch(d.getDay()){
    case 0:
        day = "sun";
        break;
    case 1:
        day = "mon";
        break;
    case 2:
        day = "tue";
        break;
    case 3:
        day = "wed";
        break;
    case 4:
        day = "thu";
        break;
    case 5:
        day = "fri";
        break;
    case 6:
        day = "sat";
        break;
    default:
        day = "Dont't Know"
        break
}
// console.log(day)

// array
// let arr = ["val1", "val2"]
// let arr2 = ["val3", "val4"]
// let arr2 = ["val5", "val6"]
// arr.push('link')
// console.log(arr)
