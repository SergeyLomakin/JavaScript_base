/*Создать функцию, генерирующую шахматную доску. 
При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, 
столбцы – латинскими буквами A, B, C, D, E, F, G, H. */
"use strict";

const game = {
    gameContainerEl: document.getElementById('game'),

    renderMap() {
        const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
        const cols = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];

        for(let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            for(let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if(rows[row] === 0 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                } else if(cols[col] === 0 && rows[row] !== 0) {
                    td.innerHTML = rows[row].toString();
                }

                if(this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = 'black'
                }
            }
        }
    },

    isCellIsBlack(rowNum, colNum) {
        if(rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
            return false;
        }

        return (rowNum + colNum) % 2 === 1;
    },
};

game.renderMap();
