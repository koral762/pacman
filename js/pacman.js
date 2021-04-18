'use strict'
const PACMAN = '😍';

var gCountFood = 0;
var gPacman;
function createPacman(board) {
    // TODO
    gPacman = {
        location: {
            i: 6,
            j: 6
        },
        isSuper: false
    }

    board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(ev) {
    if (!gGame.isOn) return
    // use getNextLocation(), nextCell
    var nextLocation = getNextLocation(ev);

    var nextCell = gBoard[nextLocation.i][nextLocation.j];

    // return if cannot move
    if (noMoreFood(gBoard)) {

        win();
    }
    if (nextCell === WALL) return;
    // hitting a ghost?  call gameOver
    if (nextCell === GHOST) {
        if (!gSoperFood) {

            gameOver()
            renderCell(gPacman.location, EMPTY)
            return
        }
    }
    if (nextCell === FOOD) updateScore(1);

    // hitting a soperfood?  ghosts are blue
    // and you can eat them
    if (nextCell === SOPERFOOD) {

        gSoperFood = 1;
        renderCell(gPacman.location, EMPTY)
        setTimeout(function () {
            gSoperFood = 0;

        }, 5000)
    }
    if(nextCell===CHERRY){
        console.log('yayyy');
    }


    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // update the DOM
    renderCell(gPacman.location, EMPTY)

    // Move the pacman
    // update the model

    gPacman.location = nextLocation;
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;

    // update the DOM
    renderCell(gPacman.location, PACMAN);
}


function getNextLocation(ev) {
    // figure out nextLocation
    // console.log('ev.code', ev.code)
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }

    switch (ev.code) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        default: return null
    }
    return nextLocation;
}