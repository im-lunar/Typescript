// Learn how to give types to function arguments in TypeScript

function greet(firstName: string) {
    console.log("Hello ", firstName);
}

greet("kaur");


// Learn how to assign a return type to a function in TypeScript
function sum(a: number, b: number) {
    return a + b;
}

const value = sum(1,2);
console.log(value);


// Understand Type Inference in TypeScript
function isLegal(age: number) : boolean {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isLegal(22));

// Learn to work with functions as parameters in TypeScript
function delayedFunction(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedFunction(function () {
    console.log("hi there");
});