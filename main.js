// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести в консоль

let numbers = [2, 67, 98, 997, 543];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);


let month = ['январь', 'февраль', 'март', 'апрель', 'май'];
console.log(month);
console.log(month[0]);
console.log(month[1]);
console.log(month[2]);
console.log(month[3]);
console.log(month[4]);

let array = ['okten', 215, 32, false, true];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr=[];
arr[0] = 23;
arr[1] = 56;
arr[2] = 89;
arr[3] = 'okten';
arr[4] = 'step';




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


for (let i=0; i<10; i++){
    document.write('<div> text</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i=0; i<10; i++) {
    document.write(`<div>${i}text</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let y=0
while  (y<20)  {
    document.write(`<div><h1>Bootstrap includes a wide range of shorthand </h1></div>`);
    y++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


let i=0
while  (i<20) {
    document.write(`<div><h1>${i} for classes that set margin </h1></div>`);
    i++
// }

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let number=[10, 56, 69, 85, 45, 96, 123, 695, 457, 785 ];

for (i = 0; i < number.length; i++) {
    console.log(number[i])
}

// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
let array=['январь', 'февраль', 'март', 'апрель', 'май',' июнь', 'июль', 'август', 'сентябрь', 'октябрь'];

for (i = 0; i < array.length; i++) {
    console.log(array[i])
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array=[890, 'февраль', 'март', 'апрель', 69,' июнь', 'июль',true , 'сентябрь', 25];

for (i = 0; i < array.length; i++) {
    console.log(array[i])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// // //     вивести тільки булеві елементи

let mix = [false, 345, true, 'okten', 'Lviv', 'Kiev', 89, 98, 5, 9];
for (let i = 0; i < mix.length; i++) {
    const mixItem = mix[i];
    if (typeof mixItem === 'boolean') {
        console.log(mixItem)
    }
}

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// //     вивести тільки числові елементи
//
let mix1 = [false, 345, true, 'okten', 'Lviv', 'Kiev', 89, 98, 5, 9];
for (let i = 0; i < mix1.length; i++) {
    const mix1Item = mix1[i];
    if (typeof mix1Item === 'number') {
        console.log(mix1Item)
    }
}
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// //     вивести тільки рядкові елементи
let mix2 = [false, 345, true, 'okten', 'Lviv', 'Kiev', 67, 98, 99 , 100];
for ( let i = 0; i < mix2.length; i++) {
    const mix2Item = mix2[i];
    if (typeof mix2Item === 'string') {
        console.log(mix2Item)
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    let arr = ['januar', 78, false, true, 45, 'okten', 890, 4, 456, 333];

    console.log(arr);
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[10]);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i<10; i++) {
    console.log(i);
    document.write(`${i}`)

}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<100; i++) {
    console.log(i);
    document.write(`${i}`)

}


// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i<100; i=i+2) {
    console.log(i);
    document.write(`${i}`)

}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i =0; i<100; i++) {
    if (i % 2 === 0 && i !== 0) {
        console.log(i)
        document.write(`${i}`)
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    
for (let i =0; i<100; i++) {
    if (i % 3 === 0 && i !== 0) {
        console.log(i)
        document.write(`${i}`)
    }
}