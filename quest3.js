/*
Задание 3: Сортировка массива объектов
Создайте массив объектов users. Каждый объект — элемент массива — должен иметь имя сотрудника, его возраст и рост.
Отсортируйте массив по возрасту сотрудников (по свойству age объектов).

изначально массив не должен быть упорядочен
количество элементов не должно быть менее 5
предусмотреть возможность сортировки по разным свойствам с использованием замыкания
(Пример замыкания в JavaScript — https://www.youtube.com/watch?v=8JsteOQxJZc )
*/

//1. Создаём массив объектов
let users = [
    {"name": "Alex", "age": 76, "height": 178},
    {"name": "George", "age": 45, "height": 143},
    {"name": "Ann", "age": 34, "height": 156},
    {"name": "Jack", "age": 56, "height": 154},
    {"name": "Nick", "age": 32, "height": 185}
];

//Создаём функцию сортировки с замыканием
function byProp(prop){
    return (a, b) => a[prop] > b[prop] ? 1 : -1;
}

//Сортируем массив по полю age и выводим в консоль
users.sort(byProp("age"));
users.forEach(i => console.log(`${i.name} is ${i.age} years old.`));

//Сортируем массив по полю height и выводим в консоль
users.sort(byProp("height"));
users.forEach(i => console.log(`${i.name}'s height is ${i.height} cm.`));
