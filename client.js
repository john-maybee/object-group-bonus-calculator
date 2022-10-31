// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
// run through the objects, take in one employeee object and return a new one with the following
  // name, bonus percentage, total compensation (base anual + bonus), and total bonus
  // individual bonus rules: rating 2 or below = no bonus; 3 = 4% of base; 4 = 6% of base; 5 = 10% of base
    // OBJECTIVE 1 ^^^
    
  // if employee number is 4 digits long = additional 5%
  // if annual is > 65k = bonus adjusted -1%
  // no bonus below 0% or above 13%
let bonusPercentage = 0;
employees.push(bonusPercentage);
console.log(employees);

let employee = employees.name;

console.log(employees);

function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  for (let i=0; i<employees.length; i++) {
    if (employees.reviewRating <= 2) {
      return employees.bonusPercentage + 0 }
    if (employees.reviewRating = 3) {
      return employees.bonusPercentage + .04 }
    if (employees.reviewRating = 4) {
      return employees.bonusPercentage + .06}
    if (employees.reviewRating = 5) {
      return employees.bonusPercentage + .1}
  }

  // console.log(employees.bonusPercentage);
  // return new object with bonus results

}
console.log(calculateIndividualEmployeeBonus(employees));

// for ()
// function findBonusPercentage(employees) {
//   let bonusPercentage = 0;
//   for(employeesObject of employees) {
//       if(employeesObject.reviewRating <= 2) {
//           return (employeesObject.push(bonusPercentage));
//       }
//   }
//   return bonusPercentage;
// }

// console.log(findBonusPercentage(employees));

