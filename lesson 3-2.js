/*С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

let basket = [
    {
        product: 'apple',
        price: 65
    },

    {
        product: 'banana',
        price: 75
    },

    {
        product: 'orange',
        price: 90
    }
];

function countBasketPrice(basket) {
    let basketPrice = 0;

    for(let name of basket) {
        basketPrice += name.price;
    }

    return ('Cart value ' + basketPrice + '₽');
}

console.log(countBasketPrice(basket));
