/*С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.*/

let val = parseInt(prompt('Введите число: '));
let pow = parseInt(prompt('Введите степень числа: '));

function power(val, pow) {
    if (pow === 0) return 1;
    else if (pow < 0) return (1.0 / power(val, -pow));
    else return power(val, --pow) * val;
}

alert(power(val, pow));
