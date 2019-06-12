// Question1
var birthYear = 1992;
var futureYear = 2030;
var currentAge1 = futureYear - birthYear;
console.log(currentAge1);

var currentAge2 = 2019 - birthYear;
console.log(currentAge2);

// Question2
var currentAge = 27, maxAge = 100, estAmount = 4300;
var ageDiff = maxAge - currentAge; 

var amountEaten = estAmount/ageDiff;

console.log("You will need to eat " 
+ amountEaten + " for " + ageDiff + 
" per year to survive til the age of " + maxAge);
