// take 3 parameter and add them
const numbers = (num1,num2,num3)=> num1+num2+num3;
const multiply = numbers(2,2,2);
console.log(multiply);

//print the output in three line using template literal
const strings =`i am a programmer.
i love code.
i am Bangladeshi`;
console.log(strings);

//write an arrow function . it take 2 parameter you pass 1 argument another take default value
const num =(num1,num2=5)=> num1+num2;
const sum = num(5);
console.log(sum);