// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
{
let a = parseFloat(prompt('Введите первое число: '));
let b = parseFloat(prompt('Введите второе число: '));
let c = prompt('Введите символы:\n\+ для сложения\n\- для вычитания\n\* для умножения\n\/ для деления')

function validator(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert('Необходимо ввести два числа');
        foo();
        return;
    }
}

function addition(a, b) {
    validator(a, b);
    return(a + b);
}

function subtraction(a, b) {
    validator(a, b);
    return(a - b);
}

function multiplication(a, b) {
    validator(a, b);
    return(a * b);
}

function division(a, b) {
    validator(a, b);
    return(a / b);
}

// export {validator, addition, subtraction, multiplication, division};

console.log(addition(a, b));
console.log(subtraction(a, b));
console.log(multiplication(a, b));
console.log(division(a, b));


/*Изначально хотел экспортировать все функции 
export {validator, addition, subtraction, multiplication, division};
и в другом файле импортировать: 
import {validator, addition, subtraction, multiplication, division} from './lesson 2-5';
но почемуто не получалось, получал ошибку синтаксиса:
Uncaught SyntaxError: Cannot use import statement outside a module
пробовал ставить export перед всёми функциями, получал ту же ошибку

Руководствовался информацией:
https://learn.javascript.ru/modules-intro
https://learn.javascript.ru/import-export

Вопрос: что я делал не так и как правильно импортировать функции с другого модуля? */


/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch). */

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            return addition(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        default:
            return 'Нужно ввести символы:\n\
            + для сложения\n\
            - для вычитания\n\
            * для умножения\n\
            / для деления'
    }
}

console.log(mathOperation(a, b, c))
}
