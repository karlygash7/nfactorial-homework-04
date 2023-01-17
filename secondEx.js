// Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. Иначе говоря, умножает `x` 
// на себя `n` раз и возвращает результат.

let x = prompt('x?');
let n = prompt('y?');

function pow(x,n){
    let z;
    for (let i = 0; i < n; i++){
        z = x * n;
    }
    console.log(z)
}
console.log(pow(3,3));