const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(value => value ** 2);

let total = 0;
for (let num of numbers2) total += num;

const average = total / numbers2.length;

console.log(`The sum is: ${total}, also the average is: ${average}`);
