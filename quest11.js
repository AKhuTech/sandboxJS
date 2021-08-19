/*
* Задание 11: Алгоритм Дейкстры
Реализовать алгоритм Дейкстры.

* Решение присылать вместе с изображением графа

*/

//Запишем граф в виде двухмерной матрицы
const matrix = [
//          1, 2, 3, 4, 5, 6
/* 1 */    [0, 7, 9, 0, 0, 14],
/* 2 */    [7, 0, 10,	15, 0, 0],
/* 3 */    [9,	10,	0,	11, 0, 2],
/* 4 */    [0,	15,	11,	0, 6, 0],
/* 5 */    [0,	0,	0,	6, 0, 9],
/* 6 */    [14, 0,	2, 0, 9, 0]
];

//Выводим матрицу в консоль
console.log(matrix);

//Алгоритм будет реализован через функцию с аргументами - матрица-карта, точка старта, точка финиша

function dijkstra (map, beginIndex, finishIndex){

    let distance = []; // минимальное расстояние
    let visited = []; // посещенные вершины
    beginIndex = beginIndex - 1; //стартовый индекс минус 1
    let temp, minIndex, min;

    //Инициализация связей
    for (let i = 0; i < matrix.length; i++){
        distance[i] = 10000;//Расстояние намного большее максимального в матрице
        visited[i] = 1;//Точка нужно посетить
    }
    distance[beginIndex] = 0;
    //Запускаем алгоритм прохода по графам
    do {
        minIndex = 10000;
        min = 10000;
        for (let i = 0; i < matrix.length; i++){
            // Если вершину ещё не обошли и вес меньше min присваиваем новые значения
            if (visited[i] == 1 && distance[i] < min){ 
                min = distance[i];
                minIndex = i;
            }
        }
        // Добавляем найденный минимальный вес к текущему весу вершины и сравниваем с текущим минимальным весом вершины
        if (minIndex != 10000){
            for (let i = 0; i < matrix.length; i++){
                if (matrix[minIndex][i] > 0){
                    temp = min + matrix[minIndex][i];
                    if (temp < distance[i]){
                        distance[i] = temp;
                    }
                }
            }
            //Отмечаем, что прошли граф
            visited[minIndex] = 0;
        }
    } while (minIndex < 10000);

    // Составление кратчайшего пути
    let ver = []; // массив посещенных вершин от конца к началу
    let end = finishIndex - 1; // индекс конечной вершины минус 1
    ver[0] = end + 1; // начальный элемент - конечная вершина
    let k = 1; // индекс предыдущей вершины
    let weight = distance[end]; // вес конечной вершины

    while (end != beginIndex){ // пока не дошли до начальной вершины просматриваем все вершины
        for (let i = 0; i < matrix.length; i++){
            if (matrix[i][end] != 0){   // если связь есть, определяем вес пути из предыдущей вершины
                temp = weight - matrix[i][end]; 
                if (temp == distance[i]){ // если вес совпал с рассчитанным, то это искомая вершина
                    weight = temp; // сохраняем новый вес
                    end = i;       // сохраняем предыдущую вершину
                    ver[k] = i + 1; // записываем в массив
                    k++;
                }
            }
        }
    }
    // Создаем результат - путь от исходной точки в конечную
    let result = ver.reverse();

    return result;
}

const route = dijkstra(matrix, 1, 5);

const route2 = dijkstra(matrix, 3, 5);
//Выводим кратчайший марщрут
console.log(route);
console.log(route2);
