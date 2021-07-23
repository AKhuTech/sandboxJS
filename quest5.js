/*
Задание 5: Работа со строкой
В переменной str находится текст.
Написать функцию, возвращающую массив объектов,
свойствами которых будут отдельные слова текста,
а значениями — частота встречаемости этого слова
*/

const myText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus tristique, maximus ligula quis, ultrices risus. Nulla vitae tortor ut dui iaculis auctor ac at velit. Vivamus at tortor pulvinar, consequat mauris eget, vulputate purus. Sed sit amet arcu molestie, sollicitudin mi nec, semper odio. Quisque ornare, quam vitae luctus dignissim, turpis tellus euismod metus, ullamcorper rutrum eros nunc nec est. Praesent vitae purus diam. Suspendisse vel sem in nibh fermentum vulputate a nec augue. Mauris vitae interdum magna. Sed sit amet sem vehicula, pellentesque metus rhoncus, tincidunt tortor. Cras at euismod ligula. Integer rhoncus nisl id diam dignissim pharetra. Aenean porta mauris orci, ac condimentum ligula vestibulum vel. Nulla facilisi.

Ut magna elit, tincidunt ullamcorper posuere vel, dictum ac orci. Praesent lobortis eleifend dapibus. Integer ultrices elit eget elit ornare, quis dignissim libero ultrices. Vestibulum sem elit, pretium fringilla neque nec, tristique pellentesque ex. Fusce consectetur mi et enim dictum consectetur. Nulla eu tristique dui. Donec laoreet, justo et semper pellentesque, ipsum mauris congue lacus, ut dapibus leo erat sit amet leo. Maecenas tristique tempus justo id bibendum. Pellentesque rutrum, enim id venenatis tincidunt, lectus quam vulputate lorem, sit amet sollicitudin augue massa in ipsum. Fusce cursus urna a ante finibus molestie. Cras non nibh nisi. Nam congue eros eu nisl maximus, eget venenatis tortor sodales. Praesent congue, sem eget pellentesque eleifend, tortor elit interdum justo, eget iaculis ante diam quis nisi. Suspendisse potenti. Nunc odio nunc, vulputate tempus massa vitae, suscipit volutpat mauris.

Vestibulum in orci ut diam dignissim facilisis eget ac mauris. Nullam dictum volutpat purus, et hendrerit erat tristique ut. Donec vitae nisl sem. Nam vel fringilla ex. Proin non lorem non mi convallis elementum. Ut gravida id arcu ut rutrum. Quisque imperdiet leo ipsum, vel iaculis metus sagittis ullamcorper. Cras eget orci sed lorem volutpat venenatis. Morbi quis feugiat ipsum. Vivamus lobortis congue lorem, et commodo purus vestibulum sit amet. Sed imperdiet commodo dignissim. Curabitur nec neque ut velit posuere sodales. Quisque aliquet efficitur pellentesque.

Mauris quis lorem dapibus magna rutrum efficitur. Fusce rutrum eget ipsum in ornare. Proin egestas lectus vel nisl maximus egestas. Integer accumsan, lacus ut mattis consectetur, arcu orci porttitor tortor, non facilisis erat lacus sed augue. Donec quis neque ut velit condimentum commodo. Proin eu dolor tempor, efficitur est a, aliquet orci. Sed leo arcu, consequat ac elit non, laoreet suscipit tellus. Nulla ullamcorper, dolor id congue consequat, orci ligula dignissim sapien, et placerat ante augue a elit. Curabitur eu tempus enim. Ut ullamcorper gravida arcu nec tincidunt. Duis rhoncus ante quis congue bibendum. Quisque mollis sapien vel ante varius venenatis. Maecenas id molestie justo. Nulla sodales blandit sem ac semper.

Curabitur lacinia, tortor non accumsan fringilla, erat tortor luctus lacus, sed consectetur leo ex in nisi. Nulla est est, commodo ut ultrices a, consequat at mauris. Donec eu mattis nibh, vel efficitur mi. Aliquam nibh nunc, mollis eget euismod vel, varius a metus. Aliquam mattis, urna ut vehicula faucibus, est augue venenatis arcu, ac eleifend risus odio nec lectus. Phasellus vitae pellentesque elit. Nam aliquet lorem in neque eleifend ullamcorper. Nulla ac elit a lacus lobortis interdum. Integer ornare nunc vel eros varius rhoncus.`;

function findWords(str){
    let result = [];
    //1. Приведем текст к нижнему регистру
    str = str.toLowerCase();

    //2. Удалим знаки препинания и лишние пробелы
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.replace(/\s{2,}/g," ");

    //3. Разобьем текст на слова
    const arr = str.split (" ");

    //4. Найдём уникальные вхождения и добавим их в массив
    //Если значение не уникально, найдём его в результирующем массиве и добавим счётчик
    for (let res of arr){
        if (!result.find(item => item[res])){
            const a = {};
            a[res] = 1;
            result.push(a);
        } else {
            result.find(item => item[res] > 0 ? item[res]++ : false);
        }
    }
    return result;
}

//Обработаем тестовый текст и выведем результаты в консоль
let abc = findWords(myText);
console.log(abc);
