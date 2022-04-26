const x = document.forms["form1"]
console.log(x)
for(let i = 0; i < x.length; i++){
    x.elements[i].style.background = "antiquewhite";
}

function oChange(){
    console.log('value')
}

function oKU(){
    console.log('keyup')
}

function oKD(){
    console.log('keydown')
}

function oF(){
    console.log('Focus')
}

function oB(){
    console.log('Blur')
}

function validate(){
    const x = document.forms["form1"]["first"]
    if(x.value == ""){
        // x.style.border = "3px solid aqua"
        alert(prompt("Enter Your Full Name To Continue...")("Your Name Is..."))
        return false;
    }else{
        return true;
    }
} 

window.onload = function(){
    console.log("Load")
}





// function validatePalin(str) {

    //  get the total length of the words
    // const len = string.length;

    //  Use for loop to divide the words into 2 half 
    // for (let i = 0; i < len / 2; i++) {

        //  validate the first and last characters are same 
//         if  (string[i] !== string[len - 1 - i]) {
//             alert( 'It is not a palindrome');
//             break;
//         }else{
//             alert( 'It is a palindrome');
//     }
// }
// }

//  accept the string or number from the prompt 
// const string = prompt('Enter a string or number: ');

// const value = validatePalin(string);

// console.log(value);