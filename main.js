// Your code here.

/*
function - getFirstNAme
parameters - person object

person =
{
  firstName - string
  lastName - string
}

return firstName property (string)

*/
//
//PROBLEM 1 getFirstName
//Getter function - gets a value from an object
//doesn't modify the object
//getPropertyName()
function getFirstName(person){
  return person.firstName
}
//PROBLEM 1 TEST
console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'})) //will print 'Colin')


//
//Problem 2 getLastName
//Getter function - gets a value from an object
//doesn't modify the object
//getPropertyName()
function getLastName(person){
  return person.lastName
}
//PROBLEM 2 TEST
console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'})) //will print 'Jaffe')


//
//PROBLEM 3 getFullName
//Getter function - gets a value from an object
//doesn't modify the object
//getPropertyName()
function getFullName(person){
  let fullName = (`${person.firstName} ${person.lastName}`)
  return fullName
}
//PROBLEM 3 TEST
console.log(getFullName({firstName: 'Colin', lastName: 'Jaffe'})) //will print 'Colin' 'Jaffe')


/*
function - setFirstName
parameters - person object, newFirsName (string)

*/
//
//PROBLEM 4 setFirstName
//Pass by Referance
//No return needed to modify our object
function setFirstName(person, newFirstName){
  person.firstName = newFirstName;
}
//PROBLEM 4 TEST
//need to declare person object somewhere to correctly test


//
//PROBLEM 5 setAge
function setAge(person, newAge){
  person.age = newAge;
}
//PROBLEM 5 TEST
//need to declare person object somewhere to correctly test


/*
person object
{
  firstName
  lastName
  age
}
OR
{
  firstName
  lastName
}

*/


//
//PROBLEM 6 giveBirthday
function giveBirthday(person){
  if(person.age === undefined){//checks if there is no age key/value in person object
    person.age = 1;//gives an absent age property a key/value age:1
  }else if (person.age !== undefined){
    person.age += 1;
  }
}
//PROBLEM 6 TEST


//
//PROBLEM 7 marry
function marry(person1, person2){
person1.married = true;
person2.married = true;
person1.spouseName = (`${person2.firstName} ${person2.lastName}`)
person2.spouseName = (`${person1.firstName} ${person1.lastName}`)
}


//
//PROBLEM 8 divorce
function divorce(person1, person2){
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName
  }



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
