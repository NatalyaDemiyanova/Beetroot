'use strict';

// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const person = prompt("Как Вас зовут?");
alert("Привет," + person +' !');
document.write('Привет, ' + person + '! ');

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const currentYear = 2020;
const yourBirthday = prompt("Ваш год рождения?");
alert("Ваш возраст " + (currentYear - yourBirthday) + " лет");

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const sideSquare = prompt("Какая длина стороны квадрата?");
alert("Периметр равен " + sideSquare * 4);

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const radiusCircle = prompt("Какой радиус окружности?");
alert("Радиус окружности равен " + 3.1415 * (radiusCircle** 2));

// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const length = prompt("Какое расстояние в км между двумя городами?");
const time = prompt("За сколько часов хотите добраться?");
alert(length / time);

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const converter = 0.883;
const money = prompt("Какую сумму хотите перевести?");
alert(converter * money);

// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
const volume = prompt(" Укажите объем флешки в Гб?");
alert(volume / 0.82);

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
const moneyPurse = prompt("Сколько денег в кошельке?");
const priceChocolate = prompt("Цена одной шоколадки?");
alert(Math.floor(moneyPurse / priceChocolate) + ", " + moneyPurse % priceChocolate);

// 9.Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const threeDigitNumber = prompt("Введите трехзначное число");
const firstNumber = threeDigitNumber % 10;
const secondNumber = Math.floor(threeDigitNumber % 100 / 10);
const thirdNumber = Math.floor(threeDigitNumber / 100);
alert( "Число задом наперед" + " " + firstNumber + secondNumber + thirdNumber);

// 10.Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const depositTwoMonth = prompt("Введите сумму вклада в банк на 2 месяца");
alert("Проценты: " + depositTwoMonth * 0.05 * 2 / 12);



// var number = 123456789, result = 0;
 
// while (number) {
//     result *= 10;
//     result += number % 10;
//     number = Math.floor(number / 10);
// }
 
// console.log(result);
// console.log(typeof(result));
