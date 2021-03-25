// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
{
let a = Math.floor(Math.random() * 15);
console.log('Представлены числа в промежутке от ' + a + ' до 15 включительно');

function foo(a) {
    while (a < 16) {
        console.log(a);
        a++;
    }
}

switch(a) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        foo(a);
        break;
}
}

/*Вопрос на сколько в данном случае правильно использовать такую конструкцию:
switch(a) {
    case(a):
        foo(a);
ведь она тоже работает или так писать не принято?
*/
