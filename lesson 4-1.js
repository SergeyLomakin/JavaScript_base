/*Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

function getNumber() {
    userInput = parseInt(prompt('Please enter a number from 0 to 999: '));

    if(0 > userInput || userInput >= 1000 || isNaN(userInput)) {
        console.log('Invalid value entered, please try again');
        return getNumber();
    }

    return userInput;
}

function toOdj(num) {
    let obj = {
        units: num % 10,
        tens: parseInt(num/10) % 10,
        hundreds: parseInt(num/100)
    }

    return console.log(obj);
}

toOdj(getNumber());
