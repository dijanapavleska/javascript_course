// // coding challenge #2
// const markHeight = 1.69;
// const johnHeight = 1.95;

// let markWeight = 78;
// let johnWeight = 92;

// let BMIMark = markWeight / (markHeight * markHeight);
// BMIMark = BMIMark.toFixed(1); // round the decimals to 1
// let BMIJohn = johnWeight / (johnHeight * johnHeight);
// BMIJohn = BMIJohn.toFixed(1);


// // ${BMIMark} -> template literal
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
// };

// // coding challenge #3

// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;
// console.log(dolphinsAverageScore, koalasAverageScore);
// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log('Dolphins win!🏆');
// } else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
//     console.log('Koalas win!🏆');
// } else if (dolphinsAverageScore === koalasAverageScore && koalasAverageScore >= 100 && dolphinsAverageScore >= 100) {
//     console.log(`It's a draw 🏆`);
// } else {
//     console.log('No team wins the trophy')
// }

// coding challenge #4
// const billValue = 430;
// tip = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;

// console.log(`The bill was ${billValue}, the tip was ${tip}, the total value was ${billValue + tip}`);

// coding challenge #4
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreKoalas = calcAverage(65, 54, 49);
// let scoreDolphins = calcAverage(44, 23, 71);
// console.log(scoreKoalas, scoreDolphins);

// checkWinner = (avgKoalas, avgDolphins) => {
//     if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
//     } else if (avgDolphins >= avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
//     } else {
//         console.log('No one wins')
//     }

// };
// checkWinner(scoreKoalas, scoreDolphins);
// //test 2

// scoreKoalas = calcAverage(23, 34, 27)
// scoreDolphins = calcAverage(85, 54, 41)
// checkWinner(scoreKoalas, scoreDolphins);

//coding challenge #2 (js fundamentals)


//  coding challenge #3

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;

//     }
// }
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (john.calcBMI > mark.calcBMI) {
//     console.log(`${john.fullName}'s BMI ${john.bmi}is bigger than ${mark.fullName}'s ${mark.bmi}`)
// } else {
//     console.log(`${mark.fullName}'s BMI ${mark.bmi} is bigger than ${john.fullName}'s ${john.bmi}`)
// };


// const billValue = 430;
// tip = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;

// console.log(`The bill was ${billValue}, the tip was ${tip}, the total value was ${billValue + tip}`);

// const calcTip = (billValue) => billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
// console.log(calcTip(100));

// let bills = [125, 555, 44];

// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
// console.log(total);

const calcTip = (billValue) => billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    const total = tip + bills[i];
    totals.push(total);
}
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));