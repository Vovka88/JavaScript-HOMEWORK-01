const numbers = [];

while (true) {
  const input = prompt("Введите число:");
  console.log(input);

  if (input === null) {
    break;
  } else {
    numbers.push(Number(input));
    console.log(numbers);
  }
}
let total = 0;

if (numbers.length > 0) {
  for (const iterator of numbers) {
    total += iterator;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Массив порожній");
}
