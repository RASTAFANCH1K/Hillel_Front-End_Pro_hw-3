// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

// ЗАДАНИЕ №1
// Написать функцию которая принимает 2 параметра перемножает и возвращает значение!!!
// РЕШЕНИЕ
function multiply(a, b) {
  return a * b; 
}
console.log( multiply(5, 10) );

// ЗАДАНИЕ №2
// Написать функцию которая принимает 3 параметра и возвращает найменьшее из них
// РЕШЕНИЕ
function min(a, b, c) {
  return Math.min(a, b, c);
}
console.log( min(100, 33, 11) );	

// ЗАДАНИЕ №3
// Написать функцию которая 
//  -принимает массив, 
//  -сохраняет непарные числа в новый массив, 
//  -сортирует массив
// - и возвращает отсортированный массив
// РЕШЕНИЕ
function sortOddNumbers(array) {
  let arrNew = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      arrNew[arrNew.length] = array[i];
    }
  }
  let tmp;
  for (let i = 0; i < arrNew.length; i++) {
    for (let j = 0; j < arrNew.length - 1; j++) {
      if (arrNew[j] > arrNew[j + 1]) {
        tmp = arrNew[j];
        arrNew[j] = arrNew[j + 1];
        arrNew[j + 1] = tmp;
      }
    }
  }
  return arrNew;
}
console.log( sortOddNumbers([2, 5, 3, 6, 9, 8, 10, 11]) );

// ЗАДАНИЕ №4
// Написать функцию котороя принимает массив, и выводит новый массив из тех элементов которые кратны 5!!
// РЕШЕНИЕ
function multipleOfFive(array) {
  let arrNew = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0) {
      arrNew[arrNew.length] = array[i];
    }
  }
  return arrNew;
}
console.log( multipleOfFive([20, 5, 3, 23, 15, 8, 10, 11]) );

// ЗАДАНИЕ №5
// Написать функцию котороя принимает массив из строк, и возвращает кокатенацию из элементов первые символы которых
// совпадают с этой подстрокой 'jitb'. Используем  toLowerCase() и indexOf() методы  !!
// РЕШЕНИЕ
function matchWithString(array) {
  const str = 'jitb';
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i].toLowerCase();
    if (str.includes(word[0])) {
      // result[result.length] = array[i];
      result.push(array[i]);
    }
  }
  return result.join(" ").toLowerCase();
}
console.log( matchWithString(['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']) ); // должно вывести javascript is the best

// ЗАДАНИЕ №6 
// Написать функцию котороя принимает строку и возвращает подстроку и количество таких подстрок в строке! 
// РЕШЕНИЕ
function  sameSubstring(str) {
  let amountOfSymbols = 1;
  let subString = "";
  let counter = 0;
  for (let i = 0; i < str.length;) {
    if (str.slice(0, amountOfSymbols) !== 
      str.slice(amountOfSymbols, amountOfSymbols + amountOfSymbols)) {
      amountOfSymbols++;
      continue;
    }
    subString = str.slice(0, amountOfSymbols);
    i = i + amountOfSymbols;
    counter++;
    // else {
    // 	subString = str.slice(0, amountOfSymbols);
    // 	i = i + amountOfSymbols;
    // 	counter++;
    // }
  }
  return [subString, counter];
}
console.log( sameSubstring('fdfdfdfd') ); // рузльтат массив из ['fd', 4]
console.log( sameSubstring('xxxxxx') ); // рузльтат массив из ['x', 6]
console.log( sameSubstring('xyzxyzxyz') ); // рузльтат массив из ['xyz', 3]

// ЗАДАНИЕ №7
// Написать функцию которая перемножает числа от 5 до 10 через рекурсию!!!
// РЕШЕНИЕ
function recursive(start, end) {
  if (start === end) {
    return end;
  }
  return start * recursive(start + 1, end);
}
console.log( recursive(5, 10) );

// ЗАДАНИЕ №8
// Написать функцию котороя принимает число и проверяет простое ли число, если да то возвращает true иначе false!!
// РЕШЕНИЕ
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log( isPrime(7) );
console.log( isPrime(6) );
console.log( isPrime(9) );

// Advanced То есть реверс главной и побочной!

// ЗАДАНИЕ №9
// 1
// РЕШЕНИЕ
var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

// реверс главной через один цикл
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i][i]);
}

// реверс главной через два цикла
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i === j) {
      console.log(arr[i][j]);
    }
  }
}

// реверс побочной через один цикл
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i][arr.length - i - 1]);
}

// реверс побочной через два цикла
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i === j) {
      console.log(arr[i][arr.length - i - 1]);
    }
  }
}

// ЗАДАНИЕ №10
// 2 Создать форму Имя, эмеил, пароль и кнопка send! По клику показать alert, что поля заполнены или наоборот!Можно двинутся дальше и реализовать pop-up а не alert!