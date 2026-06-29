// Define an interface to specify the structure of a user object
interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

// Create a function 'isLegal' that checks if a user is above 18
function isLegal(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

function greet(user: User) {
    console.log("hello " + user.firstName);
}

isLegal({
    firstName: "preet",
    lastName: "kaur",
    age: 21,
    email: "preetkaur@gmail.com"
})

greet({
    firstName: "preet",
    lastName: "kaur",
    age: 21
})


// Implementing Interfaces
// In TypeScript, you can implement interfaces using classes. This provides a way to define a blueprint 
// for the structure and behavior of a class

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee ("albedo", 19);