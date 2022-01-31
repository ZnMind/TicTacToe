let cells = document.querySelectorAll('.row > div');

let clickNum = 0;
let win = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    if (win == 0) {
        if (event.target.textContent === '') {
            if (clickNum % 2 == 0) {
                event.target.textContent = 'X'
            } else {
                event.target.textContent = 'O'
            }
            clickNum += 1;
            if (clickNum > 4) {
                checkWin();
            }
        }
    } else {
        reset();
    }
}

function checkWin() {
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
        alert("X Wins!"); win += 1
    } else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        alert("X Wins!"); win += 1
    } else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        alert("X Wins!"); win += 1
    } else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
        alert("X Wins!"); win += 1
    } else if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
        alert("X Wins!"); win += 1
    } else if (cells[6].textContent === 'X' && cells[4].textContent === 'X' && cells[2].textContent === 'X') {
        alert("X Wins!"); win += 1
    } else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        alert("X Wins!"); win += 1
    } else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        alert("X Wins!"); win += 1
    } else if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
        alert("O Wins!"); win += 1
    } else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        alert("O Wins!"); win += 1
    } else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        alert("O Wins!"); win += 1
    } else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        alert("O Wins!"); win += 1
    } else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        alert("O Wins!"); win += 1
    } else if (cells[6].textContent === 'O' && cells[4].textContent === 'O' && cells[2].textContent === 'O') {
        alert("O Wins!"); win += 1
    } else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        alert("O Wins!"); win += 1
    } else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        alert("O Wins!"); win += 1
    } else if (clickNum == 9) {
        alert("It's a Draw!"); win += 1
    }
}

function reset() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        clickNum = 0; win = 0;
    }
}