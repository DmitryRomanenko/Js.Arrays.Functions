// Завдання №1
// let obj = {};
// function isEmpty(obj) {
//   return Object.keys(obj).length > 0;
// }
// isEmpty(obj);

// Завдання №2
// const obj = {
//   num: 10,
//   num2: 15,
//   num3: 'smth',
// };

// function multiplyNumeric(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(obj);

// Завдання №3
// function readNumber() {
//   for (;;) {
//     let num = prompt('');
//     if (+num.typeof === 'number') {
//       break;
//     }
//     if (!num) {
//       return null;
//     }
//   }
// }

// Завдання №4
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }
// console.log(random(1, 5));

// Завдання №5
// function randomInteger(min, max) {
//   return min + Math.floor(Math.random() * (max - min + 1));
// }
// console.log(randomInteger(1, 5));

// Завдання №6
// function ucFirst(str) {
//   return str.substring(0, 1).toUpperCase() + str.substring(1);
// }
// console.log(ucFirst('word'));

// Завдання №7
// function checkSpam(str) {
//   let newStr = str.toLowerCase();
//   return newStr.includes('viagra') || newStr.includes('xxx');
// }
// console.log(checkSpam('smth'));
// console.log(checkSpam('buy ViAgrA'));
// console.log(checkSpam('free XXXxX'));

// Завдання №8
// function truncate(str, maxlength) {
//   return str.length > maxlength ? str.slice(0, maxlength - 2) + '...' : str;
// }
// console.log(truncate('Ось що мені хотілося б сказати на цю тему:', 20));
// console.log(truncate('Усім привіт!', 16));

// Завдання №9
// function extractCurrencyValue(str) {
//   return +str.substring(1);
// }
// console.log(extractCurrencyValue('$120') === 120);

// Завдання №10
// function sumInput() {
//   let arr = [];
//   let sum = 0;
//   for (;;) {
//     let num = prompt('');
//     if (typeof +num != 'number' || !num || isNaN(+num)) {
//       for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//       }
//       return alert(sum);
//     } else {
//       arr.push(+num);
//     }
//   }
// }
// sumInput();

// Завдання №11
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm(' Батьки дозволили ?');
//   }
// }
// Если убрать else, то в данном случае это не влияет на работу функции.
// Но если бы не было return в первом условии, то код работал бы дальше и вывел бы confirm.

// Выполнение кода после if будет не зависеть от этого if и выполнится в любом случае

// Завдання №12
// function checkAge(age) {
//   return age > 18 ? true : confirm(' Батьки дозволили ?');
//   return age > 18 || confirm(' Батьки дозволили ?');
// }
// checkAge(12);

// Завдання №13
// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(5, 10));

// Завдання №14
// function pow(x, n) {
//   for (let i = 1; i < new Array(n).length; i++) {
//     x *= 5;
//   }
//   return x;
// }
// console.log(pow(5, 3));

// Завдання №15
// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask(
//   'Ви згодні?',
//   () => {
//     alert('Ви погодилися.');
//   },
//   () => {
//     alert('Ви скасували виконання.');
//   },
// );

// Завдання №16
// function calcDate(salary, aim, expenses) {
//   let result = aim / (salary - expenses);
//   let months = Math.floor(result);
//   let days = result.toFixed(1) * 30 - months * 30;
//   return `Месяцев: ${months}; Дней: ${days}`;
// }
// console.log(calcDate(3333, 8000, 1750));

// Завдання №17
// let num;
// let sum = -0;
// for (let i = 0; i < 10; i++) {
//   num = prompt('');
//   if (+num < 0) {
//     debugger;
//     sum += +num;
//   }
// }
// if (sum) {
//   alert(sum);
// }
