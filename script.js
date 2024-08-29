// let inputslider = document.getElementById('inputslider');
// let slidervalue = document.getElementById("slidervalue");
// let passbox = document.getElementById("passbox");
// let lowercase = document.getElementById("lowercase");
// let Uppercase = document.getElementById("Uppercase");
// let numbers = document.getElementById("numbers");
// let symbols = document.getElementById("symbols");
// let genbtn = document.getElementById("genbtn");
// let copy = document.getElementById("copy");

// slidervalue.textContent = inputslider.value;

// inputslider.addEventListener('input', () =>{
//     slidervalue.textContent = inputslider.value;
// });

// genbtn.addEventListener('click', () =>{
//     passbox.value = generatepassword();
// })

// let lowerchar = "abcdefghijklmnopqrstuvwxyz";
// let upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let allnum = "0123456789";
// let allsymbol = "!£$%^&*@~><."

// function generatepassword(){
//     let genpass = "";
//     let allchar = "";

//     allchar += lowercase.checked ? lowerchar : "";
//     allchar += Uppercase.checked ? upperchar : "";
//     allchar += numbers.checked ? allnum : "";
//     allchar += symbols.checked ? allsymbol : "";

//     if(allchar == "" || allchar.length == 0){
//         return genpass;
//     }
//     let i = 1;
//     while(i<=inputslider.value){
//         genpass += allchar.charAt(Math.floor(Math.random() * allchar.length));
//         i++;
//     }
//     return genpass;
// };

// copy.addEventListener('click', ()=>{
//     if(passbox.value != "" || passbox.value.length >= 1){
//         navigator.clipboard.writeText(passbox.value);
//         copy.innerText = "check";
//         copy.title = "Password Copied";

//         setTimeout( ()=>{
//             copy.innerHTML = "content_copy";
//             copy.title = "";
//         }, 3000)
//     }
// })

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   // Generate two random colors for the gradient
//   const color1 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   const color2 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   const color3 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   // Set the background to a linear gradient using the two colors
//   document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
// });





let inputslider = document.getElementById('inputslider');
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copy = document.getElementById("copy");

slidervalue.textContent = inputslider.value;

inputslider.addEventListener('input', () =>{
    slidervalue.textContent = inputslider.value
});

genbtn.addEventListener('click', () =>{
    passbox.value = genpassword();
});

let lchar = "abcdefghijklmnopqrstuvwxyz";
let uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";
let symbol = "!£$%^&*()~#@':;?/><.,";

function genpassword(){
    let genpass = "";
    let allchar = "";

    allchar += lowercase.checked ? lchar : "";
    allchar += Uppercase.checked ? uchar : "";
    allchar += numbers.checked ? number : "";
    allchar += symbols.checked ? symbol : "";

    let i = 1;
    while(i<=inputslider.value){
        genpass += allchar.charAt(Math.floor(Math.random() * allchar.length));
        i++;
    }
    return genpass;

}