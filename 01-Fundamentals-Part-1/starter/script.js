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
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
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

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 -5);

let x, y;
x = y = 25-10-5;
console.log(x, y);

//for multiple operators you have to use parenthesis for order of operations
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
 */
/* 
//Coding Challenge #1

//Test Data 1 
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

markBMI = markMass / markHeight ** 2;
console.log(markBMI);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);


const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Test Data 2 
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

markBMI2 = markMass2 / markHeight2 ** 2 ;
console.log(markBMI2);
johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
console.log(johnBMI2);


const markHigherBMI2 = markBMI2 > johnBMI2
console.log(markHigherBMI2);
  */

/* //Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
multiple
lines`); */

//Taking Decisions if/else statements

const age = 15;
//const isOldEnough = age >= 18;

if ( age >= 18) {
     console.log("Sarah can start driver license test 🚗");  
} else {
     const yearsLeft = 18 - age;
     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);

}