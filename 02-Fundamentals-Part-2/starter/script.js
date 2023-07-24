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

/* //OBJECTS

const jonas = { 
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ["Michael", "Peter", "Steven"]

}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


//when to use bracket notation 
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]); //use bracket because
//we will not know what property in the Object the user will choose

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log("Wrong request Choose between firstName, lastName, age, job, and friends.");
}

jonas.location = "Portugal";
jonas['twitter'] = "@jonasschmedtman";
console.log(jonas);
//Challenge
//Write with object values:
//"Jonas has 3 friends and his best friends is called Michael."
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`); */
/* 
//Object Methods

const jonas = { 
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: false,
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // } 

    // calcAge: function(birthYear){
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // } 

    calcAge: function(birthYear){
         this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.  `;   
       
    }

};

console.log(jonas.calcAge());
console.log(jonas.age);
//console.log(jonas['calcAge'](1991));

//Challenge

 console.log(jonas.getSummary()); */

/*  //For Loop
 for (let index = 1; index <= 10; index++) {
    console.log(`Lifting weights repetion ${index}🏋🏿‍♀️` );
    
 }
 */
 
/* 
 //Looping Arrays, Breaking, and Continuing
 const jonas = [ 
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
   'teacher',
     ["Michael", "Peter", "Steven"],
    true
 ];

 const types = [];
for (let i = 0; i < jonas.length; i++) {
    //Reading from Jonas array
    console.log(jonas[i], typeof jonas[i]);
    
    // //Filling Types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
    
}
console.log(ages);

//continue and break

console.log("----ONLY STRINGS-----");
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== "string") continue;
    console.log(jonas[i], typeof jonas[i]);
       
}

console.log("----BREAK WITH NUMBERS-----");
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== "number") break;
    console.log(jonas[i], typeof jonas[i]);
       
}
 */

/* //Looping Backwards and Loops in Loops
const jonas = [ 
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
   'teacher',
     ["Michael", "Peter", "Steven"],
     true
 ];

 for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
 }
 */
 /* for(let exercise = 1; exercise < 4; exercise++){
    console.log(`-----------Starting exercise ${exercise}`);
 

 for(let rep = 1; rep < 6; rep++){
    console.log(`Liftting weight repetion ${rep}🏋🏿‍♀️`);
 }
}
 */
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`-----------Starting exercise ${exercise}`);
 

//  for(let rep = 1; rep < 6; rep++){
//     console.log(`Exercise ${exercise}: Liftting weight repetion ${rep}🏋🏿‍♀️`);
//  }
// }


//while loop
// for(let rep = 1; rep < 6; rep++){
//     console.log(`Liftting weight repetion ${rep}🏋🏿‍♀️`);
//  }

//  let rep = 1;
//  while(rep <= 10){
//     console.log(`WHILE: Liftting weight repetion ${rep}🏋🏿‍♀️`);
//     rep++;
//  }

 /* let dice = Math.trunc(Math.random() * 6 ) + 1;
 console.log(dice);

 while (dice !==  6)
 {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 ) + 1;
    if(dice === 6) console.log("Loop is about to end...");
 } */