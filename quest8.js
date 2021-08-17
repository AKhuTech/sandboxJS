/*
Задание 8: Фильтрация массива
Напишите функцию для фильтрации массива filterArr(inArr,filter), где inArr — входной одномерный массив, 
filter — функция принимающая по очереди каждый элемент inArr и возвращающая true, 
если этот элемент доложен входить в результат фильтрации или false, 
если элемент не должен попадать в результат.

Рассмотрите варианты, когда inArr содержит (а) строки, (б) числа, (в) объекты. 
filter для разных случаев должна быть соответствующая.
Функция filterArr(inArr,filter) должна возвращать отфильтрованный массив
*/

//Для решения не использую методы массивов, иначе можно прогнать всё через arr.filter / arr.map и т.д.
//Функция-коллбэк должна иметь аргумент - текущий элемент массива, это удобно для нашего решения и для коллбэка

function filterArr(inArr, filter){
    //Проверяем, что на входе массив
    if(!Array.isArray(inArr)){
        console.error("Invalid array");
        return false;
    }
    //Проверяем, что на входе функция
    if (filter instanceof Function === false){
        console.error("Invalid callback");
        return false;
    }
    //Проходимся по массиву, если true записываем элемент в результирующий массив
    let result = [];
    inArr.forEach(element => {
        const val = filter(element);
        val === true ? result.push(element) : false;        
    });
    return result;
}

//Проверяем варианты а, б, в из задания
console.log("Проверяем варианты а, б, в из задания");
let arr1 = filterArr([1, 2, 3, 4, 5], (el) => el > 2 ? true: false);
let arr2 = filterArr(["1as", "2asd", "3asdf", "4asdfadf", "5asdasdasd"], (el) => el.length > 4 ? true: false);
let arr3 = filterArr([{name: "John", age: 14}, {name: "July", age: 18}, {name: "Sander", age: 24}, {name: "Andrew", age: 55}], (el) => el.age > 21 ? true: false);

console.log(arr1, arr2, arr3);
//Проверяем, если аргумент 1 не массив
console.log("Проверяем, если аргумент 1 не массив");
let arr4 = filterArr(123, (el) => el > 2 ? true: false);
console.log(arr4);
//Проверяем, если аргумент 2 не функция
console.log("Проверяем, если аргумент 2 не функция");
let arr5 = filterArr([1, 2, 3, 4, 5], this > 2 ? true: false);
let arr6 = filterArr([1, 2, 3, 4, 5], "(el) => el > 2 ? true: false");
console.log(arr5, arr6);
