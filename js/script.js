let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wybrał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień';
} else if(playerInput == 2) {
  playerMove = `nożyczki`;
} else if(playerInput == 3) {
  playerMove = `papier`;
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2) {
  computerMove = `nożyczki`;
} else {
  computerMove = `papier`;
}

printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);

if ((computerMove == 'kamień' && playerMove == 'papier')||
  (computerMove == 'nożyczki' && playerMove == 'kamień')||
  (computerMove == 'papier' && playerMove == 'nożyczki')){
    printMessage('Ty wygrywasz!');
} else if ((computerMove == 'kamień' && playerMove == 'kamień')||
  (computerMove == 'nożyczki' && playerMove == 'nożyczki')||       
  (computerMove == 'papier' && playerMove == 'papier')){
    printMessage('Remis');
} else {
    printMessage('Wygrywa komputer!');
}

