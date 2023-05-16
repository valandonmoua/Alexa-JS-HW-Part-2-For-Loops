let numbers = [4, -3, 5, 7, 10];

for (let i = 1; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    for (let j = i - 1; j >= 0; j--) {
        if (currentNumber < numbers[j]) {
            numbers[j + 1] = numbers[j];
            numbers[j] = currentNumber;
        }
    }
}

console.log(numbers);