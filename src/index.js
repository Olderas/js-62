

let name = "Андрей";
let age = 29;
let boo = true;

// name = "Andrej"


// console.log (typeof name, typeof age, typeof boo);


// const header = document.querySelector("input[type=text]");

// console.log (typeof header);

// Два варианта как писать id=header (Разные селекторы)
// const header = document.getElementById("header");
const header = document.querySelector("#header");


// ---------------------------

// Как выбрать все ссылки--querySelectorAll(Cелектор)
const navLinks = document.querySelectorAll(".nav__link");

console.log (header);
// ---------------------------

// Добавляем (name и выходит Hello и + Имя которое создал до этого)
function sayHello() {
    let message = "Hello " + name;
    console.log(message)
}
sayHello();
// ---------------------------


// Числа,  подсчитывает, есть 3 способа

// function simpleMath() {
//     let result = 1 + 2;
//     console.log(result);
// }

// simpleMath ();


// function simpleMath(w, q) {
//     let result = 1 + q;
//     console.log (result)
// }

// simpleMath(122, 22);

// function simpleMath(w, q) {
//     let result = w + q;
//     return result;
// }

// let sum = simpleMath(122, 22);

// console.log(sum);

// ---------------------------


// Обработчик события

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('red');
    } else {
        header.classList.remove('red');
    }

    // console.log(scrollPos)

    // header.classList.add('red');


    // console.log("scrolled");
});


// ------------------------

// Example 1 - Математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// console.log(total)

// const diff = apples - grapes ;
// console.log(diff)


// ---------------
// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students =+ 50;
// console.log(students);


// ___________________________
// Рандомные числа до 100

// console.log (Math.random() * 100)
// console.log (Math.round(Math.random() * 100))
// console.log (Math.round(Math.random() * 100 + 1));

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots + defenceBots;

// const message = `${companyName} has ${totalBots} bots in stock`;
// console.log(message); "Cyberdyne Systems has 200 bots in stock"


// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// !!!!!!Коми(,) в ДЖс не читает (Поєтому нужно писать такую команду weight = weight.replace(',', '.');)

// let weight = '88,3';
// let height = '1.75';

// weight = weight.replace(',', '.');
// height = height.replace(',', '.');

// const bmi = (weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8




// const x = 34;

// const userInput = Number(prompt('Enter a number (1-100)'));

// if (x > userInput) {

    
// }



// console.log(x)

// const cart = [54, 28 , 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;

// for (const value of cart) {
//     total +=value;

    
// };

// console.log ('total: ', total);

// console.log(calculateTotalPri([1, 2, 3]));
// console.log(calculateTotalPri([5, 10, 15, 20]));
// console.log(calculateTotalPri([100, 200, 300]));

