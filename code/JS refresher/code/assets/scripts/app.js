import * as util from "./util.js";

//let userMessage = "Hello, World!";

//const userMessage = "Hello, World!";
//console.log(userMessage);

/*console.log(10 / 5);
console.log("hello" + " world");
console.log(10 === 1);
console.log(10 >= 12);

if (10 == 10) {
    console.log("10 is equal to 10");  
}*/

/*function greet(userName, message="Hello!") {
    //console.log(userName);
    //console.log(message);
    return "Hi I am " + userName + ". " + message; 
}

console.log(greet("John"));
*/

/*export default (userName, message) => {
    return `Hi I am ${userName}. ${message}`;

}

//anonymous functions can also be declared as below:
export default function () {
    console.log("Hello");
}*/

//creating object in javascript

/*const user = {
    name: "John Doe",
    age: 30,
    greet() {
        console.log("hello1!");
        console.log(this.age);
                }
}

console.log(user.name);
user.greet();*/

/*class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("hello2!");
        console.log(this.age);
    }
}

const user1 = new User("Jane Doe", 25);
console.log(user1.name);
console.log(user1.age);
*/

/*const hobbies = ["Reading", "Traveling", "Cooking"];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
hobbies.push("Gaming");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === "Traveling";
});

console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

const editedHobbies2 = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies2); */

//destructuring an array
/*const [firstName, lastName] = ["Max", "Joe"];
console.log(firstName);
console.log(lastName);
*/

//destructuring object

/*const { name, age } = {
    name: "Max",
    age: 34
};


console.log(name);
console.log(age);
*/

/*const hobbies = ["Reading", "Traveling"];
const newHobbies = ["Cooking"];

// here , prints arrays sepaerately but not merged
 const plusHobbies = [hobbies, newHobbies];
console.log(plusHobbies);
//here ... is the spread operator which allows us to merge arrays
const allHobbies = [...hobbies, ...newHobbies];
console.log(allHobbies);
*/
//using spread operator with objects
/*const user = {
    name: "John",
    age: 30
};
const extendedUser = {
    isAdmin: true,
    ...user, // this will merge the user object properties into extendedUser
};
*/
//console.log(extendedUser);

//control structures
/*const password = prompt("Your password");

if (password === "Hello") {
    console.log("Hello works!")
}
else if (password === 'hello') {
    console.log("hello works!")
}
else {
    console.log('access not granted')
}
*/

/*const hobbies = ["Running", "Sports"];

for (const hobby of hobbies) {
    console.log(hobby);
}
*/

//const list = document.querySelector('ul');
//list.remove();
