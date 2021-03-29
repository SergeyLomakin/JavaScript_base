/*Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

for(let i = 0; i <= 20; i++) {
    let arr = []
    
    for(let j = 0; j < i; j++) arr.push('x')

    console.log(arr.join(''));
};
