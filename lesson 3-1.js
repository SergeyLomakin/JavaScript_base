// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let arr = [];
let a = 0;

while(a < 100) {
    let isSimple = true;
    a++;
    let b = 2;

    if(a < 2) {
        isSimple = false;
        continue;
    }

    while(b < a) {
        if((a % b) == 0) {
            isSimple = false;
            break;
        }
        b++;
    }

    if(isSimple) arr.push(a);
}

console.log(arr);
