// OOM
// const number1 = prompt("Enter a number", "1")
// const operator = prompt("Enter operator to perform calculator", "+")
// const number2 = prompt("Enter a number", "3")

// var result = null

// if(operator == "+")
// {
//     result = Number(number1) + Number(number2);
// }else if(operator == "-")
// {
//     result = number1 - number2;
// }else if(operator == "/")
// {
//     result = number1 / number2;
// }else if(operator == "*")
// {
//     result = number1 * number2;
// }
// document.getElementById("result").value = result


// DOM
function clearScreen() {

    document.getElementById("result").value = "";

   }

function calculate() {

    let x = document.getElementById("result").value;

    let y = eval(x);

    document.getElementById("result").value = y;

    return y

    }

function display(value) {

    document.getElementById("result").value += value;
    
   }