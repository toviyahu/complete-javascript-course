'use strict';


/* function logger() {
    console.log("My name is Ronke");
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log( fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/* //function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1981);

//Function expression
const calcAge2 = function(birthYear){
    return 2040 - birthYear;
}
const age2 = calcAge2(1981);

console.log(age1, age2); */

//function expression
/* const calcAge2 = function(birthYear){
    return 2041 - birthYear;
}

/*Arrow Function

birthYear => 2041 - birthYear; */

/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1981);
console.log(age3);

/* const yearsUntilRetirement = birthYear => { 
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991)); */
/* const yearsUntilRetirement = (birthYear, firstName ) => { 
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); */ 


/* //Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ["Michael", "Steven", "Peter" ];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);
const firstName = "Jonas";
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const syears = [1990, 1967, 2002, 2010, 2018];
const age1 =calcAge(years[0]);
const age2 =calcAge(years[1]);
const age3 =calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages); */
/* 
//Basic Array Operations (Methods)

//add element at the end
const friends = ["Michael", "Steven", "Peter" ];
//friends.push("Jay");
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//add element at the beginning
friends.unshift("John");
console.log(friends);

//remove last element of the array
friends.pop();
console.log(friends);
friends.pop();
console.log(friends);

//remove first element of the array
friends.shift();
console.log(friends);

//What element is a particular value?
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));  //shows -1 because it is not an element

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); //does not do Type Coercion (it is strict)
console.log(friends.includes(23)); //true because it is direct

// you can use includes to write conditionals
if(friends.includes("Peter")){
    console.log("You have a friend called Peter!");
} //nothing returns

if(friends.includes("Steven")){
    console.log("You have a friend called Steven!");
} */