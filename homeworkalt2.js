let numbers = [4, -3, 5, 7, 10];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let int = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = int;
    }
  }
}

console.log(numbers);