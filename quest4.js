/*
Задание 4: Работа с декартовыми координатами
Даны координаты трёх точек в декартовой системе. Определить какая из них ближе к четвёртой точке с координатами x,y. Примечания:

координаты точек генерировать случайным образом
решение должно выглядеть в виде функции
формат хранения координат точек продумать самостоятельно, но не тратить на каждую ось по отдельной глобальной переменной
рассмотреть вариант с трёхмерной системой координат
*/

//1. Создаём точки, определяем их количество
let pointXY;
let points = [];
let n = 3;
//2. Генерируем координаты точки. Для красоты возьмём границы - размеры экрана и округлим их до целого числа (до пискелей)
pointXY = {x: Math.floor(Math.random() * window.screen.width), y: Math.floor(Math.random() * window.screen.height)};
//3. Генерируем массив объектов точек
for (let i = 0; i < n; i++){
    points[i] = {id: i, x: Math.floor(Math.random() * window.screen.width), y: Math.floor(Math.random() * window.screen.height)};
}
//4. Создаём функцию поиска ближайшей точки. Входные данные не проверяем. Аргументы - точка, к которой ищем ближайшую и массив точек
function findClosest(point, pointsArray){
    let result = {id: 0, x: 0, y: 0, length:Infinity};
    let l;
    for (i = 0; i < pointsArray.length; i++){
        l = ((pointsArray[i].x - point.x) ** 2 + (pointsArray[i].y - point.y) ** 2) ** 0.5;
        //console.log(l);
        l < result.length ? result = {id: i, x: pointsArray[i].x, y: pointsArray[i].y, length: l} : false;
    }
    return result;
}
//5. Выводим результаты в консоль
console.log(pointXY);
console.log(points);
console.log(`Closest point to ${JSON.stringify(pointXY)} is ${JSON.stringify(findClosest(pointXY, points))}`);
//6. Вариант с 3D абсолютно аналогичен. Добавляется координата z к координатам всех точек и в функцию
let pointXYZ;
let points3D = [];
let n3D = 3;

pointXYZ = {x: Math.floor(Math.random() * window.screen.width), y: Math.floor(Math.random() * window.screen.height), z: Math.floor(Math.random() * window.screen.height)};

for (let i = 0; i < n3D; i++){
    points3D[i] = {id: i, x: Math.floor(Math.random() * window.screen.width), y: Math.floor(Math.random() * window.screen.height), z: Math.floor(Math.random() * window.screen.height)};
}

function findClosest3D(point, pointsArray){
    let result = {id: 0, x: 0, y: 0, z: 0, length:Infinity};
    let l;
    for (i = 0; i < pointsArray.length; i++){
        l = ((pointsArray[i].x - point.x) ** 2 + (pointsArray[i].y - point.y) ** 2 + (pointsArray[i].z - point.z) ** 2) ** 0.5;
        //console.log(l);
        l < result.length ? result = {id: i, x: pointsArray[i].x, y: pointsArray[i].y, z: pointsArray[i].z, length: l} : false;
    }
    return result;
}

console.log(pointXYZ);
console.log(points3D);
console.log(`Closest point in 3D to ${JSON.stringify(pointXYZ)} is ${JSON.stringify(findClosest3D(pointXYZ, points3D))}`);
