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