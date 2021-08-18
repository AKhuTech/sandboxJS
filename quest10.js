/*
Задание 10: Числа словами
Создайте метод у всех числовых объектов, который бы выводил значение числа от 0 до 99 в виде слов. 
Например число 45 должно выводиться как «сорок пять».
Для выполнения задания используйте свойство prototype.
*/

Number.prototype.toRusString = function(num){
    let result = "";
    //Создадим массивы с возможными словами
    const variants = [
        ["", ""],
        ["один", ""],
        ["два", "двадцать"],
        ["три", "тридцать"],
        ["четыре", "сорок"],
        ["пять", "пятьдесят"],
        ["шесть", "шестьдесят"],
        ["семь", "семьдесят"],
        ["восемь", "восемьдесят"],
        ["девять", "девяносто"]
    ];
    const fromTenToNineteen = [
        "десять",
        "одиннадцать",
        "двенадцать",
        "тринадцать",
        "четырнадцать",
        "пятнадцать",
        "шестнадцать",
        "семнадцать",
        "восемнадцать",
        "девятнадцать"
    ];
    //Переберём варианты и выведем соответствие из массивов
    if (num < 10){
        result = variants[num][0];
    } else if(num > 9 && num < 20) {
        result = fromTenToNineteen[JSON.stringify(num)[1]];
    } else if(num > 19 && num < 100) {
        result = `${variants[JSON.stringify(num)[0]][1]} ${variants[JSON.stringify(num)[1]][0]}`;
    } else {
        //Если вне диапазона, сообщим об этом
        result = "число вне диапазона 1-99";
    }
    return result;
}
//Тестируем
//1. От 1 до 9
let a = Number.prototype.toRusString(8);
console.log(a);
//2. От 10 до 19
let b = Number.prototype.toRusString(18);
console.log(b);
//3. От 20 до 99
let c = Number.prototype.toRusString(99);
console.log(c)
//4. Вне диапазона
let d = Number.prototype.toRusString(101);
console.log(d);
//5. С десятичной дробью - дробная часть отсекается
let e = Number.prototype.toRusString(20.1);
console.log(e);
