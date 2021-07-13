/*
Задание 2: Проход по дереву
Написать тело функции reversePrint(), чтобы она при вызове доходила до самого глубокого свойства next и поднимаясь выводила числа. Например, 4,3,2,1.
*/

function reversePrint (linkedList) {
    /*
    Cразу получить последнее значение в списке linkrdList не получится.
    Не получится вернуться назад, к предыдущему элементу списка.
    Поэтому переберём элементы в прямом порядке и запомнить их в массиве,
    и выведем элементы массива в обратном порядке
    */    
    let result = "";
    let arr = [];
    let tmp = linkedList;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        result += `${arr[i]}\n`;
    }
  
    return result;
}
    /*
    P.S. Если бы не нужно было перебирать значения по условию, то задача решалась бы через рекурсию в 2 действия:
    1. рекурсивный вызов функции если value == true
    2. вывод значения value
    Типа такого:

    linkedList.next ? reversePrint(linkedList.next) : false;
    alert(linkedList.value);

    */
let someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
     }
};

console.log(reversePrint(someList));
