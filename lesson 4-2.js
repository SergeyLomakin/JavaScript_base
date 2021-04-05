/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу. */

const basket = {
    name: ['apple', 'banana', 'orange'],
    price: [65, 75, 90],

    countBasketPrice() {
        let basketPrice = 0;

        for(let i of basket.price) {
            basketPrice +=  i;
        }

        return `Cart value ${basketPrice}`;
    }
}

console.log(basket.name);
console.log(basket.countBasketPrice());

/*ВОПРОС: если расширять методы корзины на добавление и удаление товара,
то добавляя продукт в корзину, его всегда можно добавлять в конец,
да и удаление продукта из корзины можно написать по тому же индексу
(индекс продукта удаляет такой же индекс цены), но мне кажется такой подход не лучший,
на сколько правильна такая реализация свойств (продукт и цена),
и как всё-таки лучше?*/
/*ВОПРОС БОЛЬШЕ НЕ АКТУАЛЕН, ПОНЯЛ, ЧТО ВЫПОЛНИЛ НЕПРАВИЛЬНО*/

const basket = {
    products: [
        {
            name: 'apple',
            price: 65,
            quntity: 1
        },
        {
            name: 'banana',
            price: 75,
            quntity: 2
        },
        {
            name: 'orange',
            price: 90,
            quntity: 1
        }
    ],

    countBasketPrice() {
        return this.products.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.quntity, 0);
    }
};

console.log(basket.countBasketPrice());
