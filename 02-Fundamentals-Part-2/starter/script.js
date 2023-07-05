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
const calcAge2 = function(birthYear){
    return 2041 - birthYear;
}

/*Arrow Function

birthYear => 2041 - birthYear; */

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1981);
console.log(age3);

/* const yearsUntilRetirement = birthYear => { 
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991)); */
const yearsUntilRetirement = (birthYear, firstName ) => { 
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
