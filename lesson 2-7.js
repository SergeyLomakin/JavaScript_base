console.log(null > 0);    //false   нельзя сказать, что ничего больше 0 (с другой стороны ничего лучше чем отрицательное значение (например долг)? - да (null > -1) - true)
console.log(null < 0);    //false   так же нельзя сказать, что ничего меньше 0
console.log(null >= 0);   //true    но при нестрогом равенстве, это сказать можно - 
console.log(null <= 0);   //true    - ничего похоже на 0? - да
console.log(null == 0);    //false   null - ничто, ничего, а 0 - конкретное значение, они равны? - нет
console.log(null != 0);   //true     null - ничто, ничего, а 0 - конкретное значение, они не равны? - да
console.log(null === 0);    //false  строгое сравнение, т.к. тип null отличается от типа number
console.log(null !== 0);   //true    строгое сравнение, т.к. тип null отличается от типа number
// если сравнивать null с другими значениями, то равенство будет таким же, как если бы вместо null был 0
