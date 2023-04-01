const markHeight = 1.69;
const johnHeight = 1.95;

let markWeight = 78;
let johnWeight = 92;

const BMIMark = markWeight / (markHeight * markHeight);
const BMIJohn = johnWeight / (johnHeight * johnHeight);

markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);