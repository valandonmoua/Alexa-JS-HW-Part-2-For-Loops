let numbers = [4, -3, 5, 7, 10]

for (let i in numbers) {
    let currentNumbers = numbers[i];

    for (let j = 0; j < i; j++) {
        if (currentNumbers < numbers[j]) {
            for (let k = i; k > j; k--) {
                numbers[k] = numbers[k - 1]
            }
            numbers[j] = currentNumbers;
            break;
        }
    }

}

console.log(numbers)