// Let's say we have a function which return the first element of array. Array can be of type either string or integer

type Input = string | number;

function firstEle(arr: Input[]) {
    return arr[0];
}

const value = firstEle(["karan", "aujla"]);

// So what is the problem in this approach
// 1. User can send different types of values in the input like -
firstEle([1,2,3, "zoro", "luffy"]);

// 2. Typescript isn't able to infer the right type of the return type
console.log(value.toUpperCase());

// Solution

function identity<T>(arg: T) {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);