/*
Тестовые данные
*/
"use strict";
    let testData = [
        {from: "Sheremetyevo", to: "Istanbul", transport: "Aircraft", transportNo: "SU 6666", seatNo: "28A", baggage: "Baggage drop at ticket counter 344."},
        {from: "Moscow", to: "Sheremetyevo", transport: "Train", transportNo: "AeroExpress coach 2", seatNo: null, baggage: null},
        {from: "Borispil", to: "Kiev", transport: "Bus", transportNo: null, seatNo: null, baggage: null},       
        {from: "Istanbul", to: "Borispil", transport: "Aircraft", transportNo: "TA 7777", seatNo: "12A", baggage: "Baggage drop at ticket counter 456."},
        {from: "Minsk", to: "Moscow", transport: "Train", transportNo: "002A coach 2", seatNo: "24", baggage: null},
];
console.log(testData);

/*
Задание  1: Сортировка карточек
Вам дана стопка посадочных карточек на различные виды транспорта, которые доставят вас из точки A в точку B. Карточки перепутаны, и вы не знаете, где начинается и где заканчивается ваше путешествие. Каждая карточка содержит информацию о том, откуда и куда вы едете на данном отрезке маршрута, а также о типе транспорта (номер рейса, номер места и прочее).
Предоставьте JavaScript API, который отсортирует такой список карточек и вернет словесное описание, как проделать ваше путешествие. API должен принимать на вход несортированный список карточек в формате придуманном вами и возвращать, например, такое описание:

• Take train 78A from Madrid to Barcelona. Seat 45B.
• Take the airport bus from Barcelona to Gerona Airport. No seat assignment.
• From Gerona Airport, take flight SK455 to Stockholm. Gate 45B. Seat 3A. Baggage drop at ticket counter 344.
• From Stockholm, take flight SK22 to New York JFK. Gate 22. Seat 7B. Baggage will be automatically transferred from your last leg.

Требования:

• Алгоритм должен работать с любым количеством карточек, если все карточки образуют одну неразрывную цепочку.
• Время прибытия и отправления неизвестно и не важно. Подразумевается, что средство передвижения для следующего отрезка дожидается вас.
• Структура кода должна быть расширяема для использования любых типов транспорта и информации, которая может быть связана с каждым типом транспорта.
• API будет вызываться из других частей JavaScript-кода без необходимости дополнительных запросов между браузером и сервером.
• Не используйте библиотеки и фреймворки, напишите все с нуля.
• Задокументируйте в коде формат входных и выходных данных.

РЕШЕНИЕ:

API - это описание способов (набор классов, процедур, функций, структур или констант), которыми одна компьютерная программа может взаимодействовать с 
другой программой

API будет представлен в виде 2-х функций:
myRoute - для сортировки карточек;
myInstruction - для составления текстовой инструкции;

-Формат входных данных
Обе функции принимают массив объектов

-Формат объекта карточки 
{from: "Пункт отправления - обязательный", to: "Пункт назначения - обязательный", transport: "Вид транспорта - обязательный", 
transportNo: "Номер поезда/рейса/автобуса -  необязательный", seatNo: "номер места - необязательный"}

-Формат выходных данных
myRoute - Массив объектов
myInstruction - String

-Алгоритм
myRoute
1. Проверка данных
2. Поиск стартовой точки маршрута, он не встречается в пунктах отправления
3. Поиск первой карточки
4. Перебор карточек от первой до последней в цикле - сопоставляем пункты прибытия и отпраления
5. Возврат итогового массива объектов
myInstruction
1. Вызов myRoute
2. Составление текста-результата
3. Возврат текста-результата
*/

function myRoute(objArr){
    let start = [];
    let finish = [];
    for (let i in objArr){
        //Проверка данных
        if (!objArr[i].from || !objArr[i].to || !objArr[i].transport) {
            throw new SyntaxError("Некорректные входные данные");
        }
        //делаем 2 массива с точками отправлений и назначений
        start.push(objArr[i].from);
        finish.push(objArr[i].to);
    }
    //Перебираем пункты отправлений и назначений, удаляем повторения
    for (let i = 0; i < start.length; i++){
        for (let j = 0; j < finish.length; j++){
            start[i] === finish[j] ? start[i] = null: null;
        }
    }
    //Получаем пункт отправления
    start = start.join("");
    //Перебираем карточки
    let travel = [];
    while (travel.length != objArr.length){
        for (let i = 0; i < objArr.length; i++){
            if (start === objArr[i].from){
                travel.push(objArr[i]);
                start = objArr[i].to;
            }
        }
    }
    //Возвращаем результат
    return travel;
}
function myInstruction(objArr){
    //Вызываем функцию myRoute
    let obj = myRoute(objArr);
    let result = "";
    //Проходим по отсортированным карточкам obj и выбираем из них данные
    for (let i = 0; i < obj.length; i++){
        result += `From ${obj[i].from} take ${obj[i].transport} ${obj[i].transportNo} to ${obj[i].to}. `;
        obj[i].seatNo ? result+= `Seat ${obj[i].seatNo}. ` : result += `No seat assignment. `;
        obj[i].baggage ? result += `${obj[i].baggage}\n` : result += `\n`;
    }
    //Возвращаем результат
    return result;
}

console.log(myRoute(testData));
console.log(myInstruction(testData));
