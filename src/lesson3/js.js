/* function first() {
    setTimeout ( function(){
        console.log(1);
    }, 500 );
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log("я учу "+ lang);
    callback();
}

learnJS("JavaScript", function(){
    console.log("я прошел третий урок");
})

// Объекты 
let options = {
    width: 1024,
    height: 1024,
    name:"test"
};

console.log(options.name);
options.bool = false;
options.color = {
    border: "black",
    bg: "red"
};

delete options.bool; // удалить булиновое значение

console.log(options);

for (let key in options) {
    console.log('Свойство '+ key + ' имеет значение ' + options[key]); // цикл перебора свойств объекта
}
console.log(Object.keys(options).length); // Вывод количества свойств в объекте


// Массивы
let arr = [1, 2, 3, 4, 5]; // создание массива
arr[99] = 99;
for (let i = 0; i < arr.length; i++) { // цикл перебора значений массива
    console.log(arr[i]);
}

/* arr.pop();  // удалить последний эл-т
arr.push('5'); // добавить последний эл-т
arr.shift(); // удалить первый эл-т
arr.unshift('1'); // добавить первый эл-т
console.log(arr);
 */

// метод forEach
/* let arr = ['first', 2, 3, 'four', 5]; 
arr.forEach(function(item, i, mass){
    console.log(i + ': ' + item + ' (массив: ' + mass + ' )');
}); 
*/
// цикл for..of для получения только значения в массиве
/* let mass = [1, 3, 4, 6, 7];

for (let key of mass) {
    console.log(key);
}  */

// split
/* let ans = prompt("",""),
    arr = [];

arr = ans.split(',');
console.log(arr); */

// Массив одной строкой
// let arr = ['aawe', 'qqq', 'pp', 'rqa'],
//     i = arr.join(', '); // этот метод берет каждый эл-т массива и склеивает в одну строку
// console.log(i);

// let arr = ['aawe', 'qqq', 'pp', 'rqa'],
//     i = arr.sort(); // этот метод берет каждый эл-т массива и выстраивает по алфовиту
// console.log(arr);

let arr = [1, 15, 4],
    i = arr.sort(compareNum); // этот метод берет все цифры массива и выстраивает их по порядку при помощи callback функции

function compareNum(a,b) {
    return a-b;
}
console.log(arr);


let soldier = {
    health:400,
    armor:100
};
let = john = {
    health:100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
