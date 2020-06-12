/* **************************
    Variables and data types
*/

// var firstName = "Mero";

// console.log(firstName);

// var lastName = "Hegazi";

// var age = 26;

// var job = "developer";

// console.log(job);

/* **************************
    Variable Mutation and type coercion
*/

// var firstName = "John";
// var age = 23;

// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     " Is he married? " +
//     isMarried
// );

// /* **************************
//     Variable Mutation ( change the value of a variable )
// */

// age = "twenty eight";
// job = "driver";

// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     " Is he married? " +
//     isMarried
// );

// var lastName = prompt("What is his last Name");
// console.log(firstName + " " + lastName);

/* **************************
    Basic Operators
*/

// var year, yearJohn, yearMark;
// now = 2020;
// ageJohn = 28;
// ageMark = 33;
// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical Operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older the John");
// var x;
// console.log(typeof x);

/* **************************
    Operator precedence ( Which Operator is excuted first )
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 32 - 6
// console.log(x, y);

// // Assignment operator works from right to left

// // More Operators
// // x = x * 2;
// x *= 2;

// console.log(x);

// x += 10;
// console.log(x);

// x = x + 1;
// x += 1;
// x++;
// x--;
// console.log(x);

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀

*/

// var markHeight = 1.8;
// var markMass = 80;

// var johnHeight = 1.9;
// var johnMass = 90;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// var isJohnBMIHigher = johnBMI > markBMI;

// console.log("Is John's BMI higher than Mark's ? " + isJohnBMIHigher);
// console.log("MarkBMI " + markBMI, "JohnBMI " + johnBMI);

/*****************************
 * If / else statements
 */

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " will hopfully marry soon :)");
// }

// var isMarried = true;

// if (isMarried) {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " will hopfully marry soon :)");
// }

// var markHeight = 1.8;
// var markMass = 80;

// var johnHeight = 1.9;
// var johnMass = 90;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// var isJohnBMIHigher = johnBMI > markBMI;

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's ");
// } else {
//   console.log("John's BMI is higher than Marks's ");
// }

// // console.log("Is John's BMI higher than Mark's ? " + isJohnBMIHigher);
// // console.log("MarkBMI " + markBMI, "JohnBMI " + johnBMI);

/*****************************
 * Boolean logic
 */

// var firstName = "John";
// var age = 16;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man");
// } else {
//   console.log(firstName + " is a man.");
// }

/*****************************
 * The Ternary Operator and Switch Statements
 */

// Ternary operator
// var firstName = "John";
// var age = 16;

// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// // switch statements

// var job = "instructor";
// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches people");
//     break;
//   case "driver":
//     console.log(firstName + " drives cars");
//     break;
//   case "designer":
//     console.log(firstName + " design websites");
//     break;
//   default:
//     console.log(firstName + " does something else");
// }

// var age = 33;

// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man");
//     break;
//   default:
//     console.log(firstName + " is a man.");
// }

/*****************************
 * Truthy and Falsy values and equality operators
 */

//  falsy values: undefined, null, 0, '', NaN

//  truthy values: Not falsy values

// var height;
// height = 23;

// if (height || height === 0) {
//   console.log("Variable is defined");
// } else {
//   console.log("Variable has NOT been defined");
// }

// // Equality operators

// if (height == "23") {
//   console.log("The == operator does types coercion");
// }

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var JohnTeamAverage = (89 + 120 + 999) / 3;
// var MikeTeamAverage = (116 + 94 + 200) / 3;
// var MaryTeamAverage = (97 + 134 + 105) / 3;

// if (JohnTeamAverage > MikeTeamAverage && JohnTeamAverage > MaryTeamAverage) {
//   console.log("John's Team Wins " + JohnTeamAverage);
// } else if (
//   JohnTeamAverage === MikeTeamAverage &&
//   JohnTeamAverage === MaryTeamAverage
// ) {
//   console.log(
//     "Draw !! John's and Mike's and Mary's Teams Scored " + JohnTeamAverage
//   );
// } else if (
//   MaryTeamAverage > JohnTeamAverage &&
//   MaryTeamAverage > MikeTeamAverage
// ) {
//   console.log("Mary's Team Wins " + MaryTeamAverage);
// } else {
//   console.log("Mike's Team Wins " + MikeTeamAverage);
// }

/*****************************
 * Functions
 */

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// var ageJohn = calculateAge(1994);
// var ageMike = calculateAge(1990);
// var ageJane = calculateAge(1995);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years.");
//   } else {
//     console.log(firstName + " is already retired");
//   }
// }

// yearsUntilRetirement(1994, "Omar");
// yearsUntilRetirement(1990, "koko");
// yearsUntilRetirement(1955, "lolo");
// yearsUntilRetirement(1912, "bobo");

/*****************************
 * Function Statements and Function Expressions
 */

// Function decalaration

// function whatDoYouDo(job, firstName) {}

// Function Expression
// var whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code";

//     case "driver":
//       return firstName + " drives a cab";

//     case "designer":
//       return firstName + " designs webistes";

//     default:
//       return firstName + " does something else";
//   }
// };

// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("designer", "Jane"));
// console.log(whatDoYouDo("cop", "mark"));

/*****************************
 * Arrays
 */

// Initialize new array
// var names = ["John", "Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// // Mutate array data
// names[1] = "Ben";
// console.log(names);

// names[names.length] = "Mary";
// console.log(names);

// // Differnt data types
// var John = ["John", "Smith", 1990, "designer", false];

// John.push("blue");
// John.unshift("Mr.");
// John.pop();
// John.pop();
// John.shift();
// // John.unshift("Mr.");

// console.log(John.indexOf(1994));

// console.log(John);

// var isDesigner =
//   John.indexOf("designer") === -1
//     ? "John is not a designer"
//     : "John is a designer";

// console.log(isDesigner);

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// var tipCalculator = function (bill) {
//   var precentage;
//   if (bill < 50) {
//     precentage = 0.2;
//   } else if (bill > 50 && bill < 200) {
//     precentage = 0.15;
//   } else {
//     precentage = 0.1;
//   }

//   return bill * precentage;
// };

// var bills = [124, 48, 268];

// var tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2]),
// ];

// var finalPaidAmount = [
//   tipCalculator(bills[0]) + bills[0],
//   tipCalculator(bills[1]) + bills[1],
//   tipCalculator(bills[2]) + bills[2],
// ];

// console.log(tips);
// console.log(finalPaidAmount);

/*****************************
 * Objects and properties
 */

//  Object literal
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};

console.log(john.firstName);
console.log(john["lastName"]);

var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;

console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";

console.log(jane);
