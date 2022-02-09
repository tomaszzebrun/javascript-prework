function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return `nożyczki`;
    } else if (argMoveId == 3) {
        return `papier`;
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

function displayResult(argComputerMove, argPlayerMove){

    console.log('moves:', argComputerMove, argPlayerMove);

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if ((computerMove == 'kamień' && playerMove == 'papier')||
        (computerMove == 'nożyczki' && playerMove == 'kamień')||
        (computerMove == 'papier' && playerMove == 'nożyczki')){
        printMessage('Ty wygrywasz!');
    } else if ((computerMove == 'kamień' && playerMove == 'kamień')||
        (computerMove == 'nożyczki' && playerMove == 'nożyczki')||
        (computerMove == 'papier' && playerMove == 'papier')){
        printMessage('Remis');
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = 'nieznany ruch';

playerMove = getMoveName(playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

computerMove = getMoveName(randomNumber);

displayResult(computerMove, playerMove);