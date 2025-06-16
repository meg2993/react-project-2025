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

class User {
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

