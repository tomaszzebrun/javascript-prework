{
    function getMoveName(argMoveId) {
        if (argMoveId === 1) {
            return 'kamień';
        } else if (argMoveId === 2) {
            return 'nożyczki';
        } else if (argMoveId === 3) {
            return 'papier';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function playGame(playerInput)
    {
        function displayResult(argComputerMove, argPlayerMove) {
            printMessage('<br>');
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            if ((computerMove === 'kamień' && playerMove === 'papier') ||
                (computerMove === 'nożyczki' && playerMove === 'kamień') ||
                (computerMove === 'papier' && playerMove === 'nożyczki')) {
                printMessage('Ty wygrywasz!');
            } else if ((computerMove === 'kamień' && playerMove === 'kamień') ||
                (computerMove === 'nożyczki' && playerMove === 'nożyczki') ||
                (computerMove === 'papier' && playerMove === 'papier')) {
                printMessage('Remis');
            } else {
                printMessage('Tym razem przegrywasz :(');
            }
        }
        clearMessages();
        const playerMove = getMoveName(playerInput);
        const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
        displayResult(computerMove, playerMove);
    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(2);
    });

    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(3);
    });
}
