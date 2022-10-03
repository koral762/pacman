'use strict'
const WALL = '❌'
const FOOD = '.'
const EMPTY = ' ';
const SOPERFOOD = '✨';
const CHERRY = '🍒';

var gEmptyCells = [];
var gSoperFood = 0;
var gBoard;
var gGame = {
    score: 0,
    isOn: false
}
function init() {
    gBoard = buildBoard()
    console.log(gBoard)
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container');
    gGame.isOn = true;
    var elmodal = document.querySelector('.modal');
    elmodal.classList.add('hidden');
    setInterval(cherryPopUp, 15000, gEmptyCells);

}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            } else if (i === 1 && j === 1 || i === 1 && j === 8 || i === 8 && j === 1 || i === 8 && j === 8) {

                board[i][j] = SOPERFOOD;

            }

        }
    }
    return board;
}




function updateScore(diff) {
    // update model
    gGame.score += diff;
    // and dom
    var elScore = document.querySelector('h2 span');
    elScore.innerText = gGame.score;
}

function gameOver(winORlose) {
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
    gIntervalGhosts = null;
    var elTitle = document.querySelector('.modal-title');
    elTitle.innerText = 'GAME OVER!!!';
    var elbutton = document.querySelector('.button');
    elbutton.innerText = 'Restart';
    var elmodal = document.querySelector('.modal');
    elmodal.classList.remove('hidden');
    // TODO
}

function win() {
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
    gIntervalGhosts = null
    var elTitle = document.querySelector('.modal-title');
    elTitle.innerText = 'You won!!!';
    var elbutton = document.querySelector('.button');
    elbutton.innerText = 'Play again';
    var elModal = document.querySelector('.modal')
    elModal.style.backgroundColor = 'blue';
    var elmodal = document.querySelector('.modal');
    elmodal.classList.remove('hidden');

}

function cherryPopUp(gEmptyCells) {

    
    // while (gBoard[i][j] === WALL || gBoard[i][j] === PACMAN || gBoard[i][j] === SOPERFOOD || gBoard[i][j] === GHOST) {

    //     var i = getRandomIntInclusive(1, 8);
    //     var j = getRandomIntInclusive(1, 8);
    // 

    renderCell({i:2,j:3}, CHERRY);

}