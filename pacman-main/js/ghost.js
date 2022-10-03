'use strict'
const GHOST = '&#9781;';

var gGhosts = []
var gIntervalGhosts;

function createGhost(board, id) {
    // TODO
    var ghost = {
        location: {
            i: 3,
            j: 3
        },
        currCellContent: FOOD,
        id: id,
        color: get_random_color(),

    }
    gGhosts.push(ghost);
    board[ghost.location.i][ghost.location.j] = GHOST;
}

function createGhosts(board) {
    // TODO: 3 ghosts and an interval
    gGhosts = [];
    createGhost(board, 1);
    createGhost(board, 2);
    createGhost(board, 3);

    gIntervalGhosts = setInterval(moveGhosts, 2000)
}

function moveGhosts() {
    // loop through ghosts
    for (var i = 0; i < gGhosts.length; i++) {
        var ghost = gGhosts[i];
        moveGhost(ghost)
    }


}
function moveGhost(ghost) {
    // figure out moveDiff, nextLocation, nextCell

    var moveDiff = getMoveDiff();

    var nextLocation = {
        i: ghost.location.i + moveDiff.i,
        j: ghost.location.j + moveDiff.j

    }

    var nextCell = gBoard[nextLocation.i][nextLocation.j];
    // return if cannot move
    if (nextCell === WALL) return
    if (nextCell === CHERRY) return
    if (nextCell === GHOST) return
    if (gSoperFood) {
        if (nextCell === PACMAN) {
            gGhosts.splice(ghost.id, 1);
            console.log(gGhosts);
            setTimeout(function(){
                gGhosts.push(ghost.id);
            },5000)
            return
        }

    } else {

        // hitting a pacman?  call gameOver
        if (nextCell === PACMAN) {
            gameOver();
            return
        }

    }

    // update the model
    gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent

    // update the DOM
    renderCell(ghost.location, ghost.currCellContent);

    // Move the ghost
    // update the model

    ghost.location = nextLocation;
    ghost.currCellContent = nextCell;

    gBoard[ghost.location.i][ghost.location.j] = GHOST;

    // update the DOM
    renderCell(ghost.location, getGhostHTML(ghost))

}

function getMoveDiff() {
    var randNum = getRandomIntInclusive(1, 100);
    if (randNum <= 25) {
        return { i: 0, j: 1 }
    } else if (randNum <= 50) {
        return { i: -1, j: 0 }
    } else if (randNum <= 75) {
        return { i: 0, j: -1 }
    } else {
        return { i: 1, j: 0 }
    }
}


function getGhostHTML(ghost) {
    return `<span>${GHOST}</span>`
}