/*
Задание 9: Извлечение массива свойств
Возьмите массив, подобный массиву users из задания 3.
Напишите функцию extractProps(prop), которая по значению аргумента prop вернёт массив всех одноимённых свойств из объектов массива users.
*/
//1. Создаём массив объектов
const users = [
    {"name": "Alex", "age": 76, "height": 178},
    {"name": "George", "age": 45, "height": 143},
    {"name": "Ann", "age": 34, "height": 156},
    {"name": "Jack", "age": 56, "height": 154},
    {"name": "Nick", "age": 32, "height": 185},
];

//2. Выводим исходный массив в консоль
console.log(users);

//3. Сама функция через map, добавил argument "arr", вдруг нужно будет другой массив прогнать
function extractProps(prop, arr = users){
    //Проверим, что arr - массив
    if (!Array.isArray(arr)){
        console.error("Invalid array");
        return null;
    }
    //Получим свойство из объекта или выведем ошибку, что элемент массива не объект
    let result = arr.map((item) => {
        if(item instanceof Object){
            return item[prop]
        } else {
            console.error("Invalid object in array");
        }
    });
    return result;
}

//4. Выводим результаты работы функции
console.log("Массивы свойств");
console.log(extractProps("name"));
console.log(extractProps("age"));
console.log(extractProps("height"));

//5. Проверяем "бракованный" массив
const usersD = [
    {"name": "Alex", "age": 76, "height": 178},
    {"name": "George", "age": 45, "height": 143},
    {"name": "Ann", "age": 34, "height": 156},
    {"name": "Jack", "age": 56, "height": 154},
    {"name": "Nick", "age": 32, "height": 185},
    "asdf",
    1234
];
console.log("Бракованный массив");
console.log(extractProps("name", usersD));

//6. Попробуем "скормить" функции не массив
console.log("Аргумент функции не массив");
console.log(extractProps("name", "usersD"));
