// function max(a,b){
// return(a>b) ? a:b;
// }
// console.log(max(50,100));

// const output= FIZZBUZZ(7);
// console.log(output);
// function FIZZBUZZ(input) {
//     if(typeof input !== 'number'){
// return ('NaN');
//     }
//     if ((input % 3 ===0) && (input % 5 ===0)) {
//         return('FizzBuzz');
//     }
// if(input % 3===0){      
//     return('Fizz');
//     }
// if (input % 5===0){
//     return('BUZZ');
// } 
// return(input);
// checkSpeed(130);
// function checkSpeed(speed) {
//     const speedLimit= 70;
//     const bob=(speed-speedLimit)/5;
//     const point= Math.floor(bob);
//     const numberOfPoint= 12;
//     if(speed <=70+5)
//     console.log('OK');
//     else if(point < numberOfPoint)
//     console.log('point:',point);
//    else console.log('License suspended');
// }
// showNumber(10);
// function showNumber(limit) {
// for (i=0; i <= limit; i++)
// if (i % 2 === 0) {
//     console.log( i, 'EVEN');
// }
// else console.log(i,'ODD');
// }
// function showProperties(object) {
//     const movie = {
//         title = 'a',
//         releaseDate = 2019,
//         rating = 4.5,
//         director = 'samuel'
//     };
//     for(let key in object)
//     if (typeof object[key] === 'string')
//     console.log(key,object[key]);
// }
// console.log(sum(10));
// function sum(limit) {
//     for(i=3;i<=10;i+=3 && j=5;j<=10;j+=5)
//     if(i<=limit && j<=limit)
//     return(i++ && j++);
    
// }
// let address = {
//     street:'a',
//     city:'b',
//     zipCode:'c'
// };
// function showAddress(address) {
//     for (let key in address) 
//     console.log(key,address[key]);
// }
// showAddress(address);
// factory function
// function showAddress(street,city,zipCode) {
// return {
//         street,
//         city,
//         zipCode
//     };
// }
// const address = showAddress;
// console.log(address);
// constructor function
// function Address(street,city,zipCode) {
//     {
//     this.street= street;
//     this.city= city;
//     this.zipCode= zipCode;
//     };
// }
// const address = Address;
// console.log(address);
let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
function setGradient() {
    body.style.background = `linear-gradient(to right,
        ${color1.value},
         ${color2.value})`;
         css.textContent = body.style.background + ";";   
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input',setGradient) ;