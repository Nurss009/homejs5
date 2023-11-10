// const result =document.querySelector('result')
//
// function startGame() {
//     var randomNumber = Math.floor(Math.random() * 10) + 1;
//     var userInput = parseInt(document.getElementById("userInput").value);
//     if (userInput === randomNumber) {
//         document.getElementById("result").innerHTML = "Ты победил!";
//     } else {
//         document.getElementById("result").innerHTML = "Давай еще раз. Загаданное число было: " + randomNumber;
//     }
// }


const result = document.querySelector('result')


function playGame(playerChoice) {
    let choices = ['камень', 'бумага', 'ножницы'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "!";
    } else if (
        (playerChoice === 'камень' && computerChoice === 'ножницы') ||
        (playerChoice === 'paper' && computerChoice === 'камень') ||
        (playerChoice === 'бумага' && computerChoice === 'бумага')
    ) {
        result = "Ты выйграл!";
    } else {
        result = "Ты проиграл!";
    }

    document.getElementById('result').innerHTML = `Ваш выбор: ${playerChoice}, Выбор компютера: ${computerChoice}. ${result}`;
}