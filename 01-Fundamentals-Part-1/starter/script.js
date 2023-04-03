 /*let js = 'amazing';
      if (js === 'amazing') alert('JavaScript is FUN!');
      40+8+23-10;
      console.log(40+8+23-10); 
      console.log('Jonas');
      console.log(23);

      let firstName = "Matilda";
      console.log(firstName);
      console.log(firstName);
      console.log(firstName);
      */


/* let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//a bug in JavaScript never corrected (should return null and not object)
console.log(typeof null);

 */
/* let age = 30;
age = 31;  //mutating the variable

//const variable that cannot be reassigned aka immutable
const birthYear = 1991;

//old way var var is function scoped
var job = 'programmer';
job = 'business owner';
 */
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas /10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Yahu';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25 or x = 15 + 10 = 25
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);