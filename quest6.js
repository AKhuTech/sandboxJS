let arr = [
	[
		'a', 'b', [1, 2, 3], [4, 5],
	],
	[
		'd', ['e', 'f'],
	],
];

/*
Задание 6: Копирование массивов
Напишите функцию копирования многомерного массива. Примечание: используйте рекурсию
*/

function copyArray(array) {
    var result = []; // создаём результирующий массив

    if (array.length == 0)
        return result; // если массив пустой, возврщаем пустой массив

    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            result.push(copyArray(array[i].slice(0))); // вызываем рекурсивно функцию, если элемент сам массив
        } else {
            result.push(array[i]); // копируем элемент в новый массив (за исключением объектов - они существуют по ссылке)
        }
    }

    return result; // returns the resulting array
}

//Проверка: копируем массив, меняем начальный. Выводим оба в консоль. Видим, что копия осталась, а исходник изменился
const newArr = copyArray(arr);
arr = [];
console.log(newArr);
console.log(arr);
