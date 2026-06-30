function maxValue(arr: number[]) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]! > max) {
            max = arr[i]!;
            // arr[i]! this means i know it isn't undefined
        }
    }
    return max;
}

console.log(maxValue([1,2,3]))

// Given a list of users, filter out users that are legal (greater than 18 years of age)

interface User {
    firstName: string,
    lastName: string,
    age: number
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "Reet",
    lastName: "Kaur",
    age: 21
}, {
    firstName: "Albedo",
    lastName: "Y",
    age: 17
}]));