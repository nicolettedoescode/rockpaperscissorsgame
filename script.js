const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);
        displayResults(userChoice, computerChoice, winner);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function displayResults(userChoice, computerChoice, winner) {
    document.getElementById('userChoice').textContent = userChoice;
    document.getElementById('computerChoice').textContent = computerChoice;
    document.getElementById('message').textContent = 'You chose ' + userChoice + ', Computer chose ' + computerChoice;
    document.getElementById('winner').textContent = winner;

    // Show the choices display
    document.getElementById('choicesDisplay').style.display = 'block';
}
