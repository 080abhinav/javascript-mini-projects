let compMove = '';
function computerChance() {
    const rand = Math.random();
    if (rand >= 0 && rand < (1 / 3)) {
        compMove = 'rock';
    }
    else if (rand >= (1 / 3) && rand < (2 / 3)) {
        compMove = 'paper';
    }
    else {
        compMove = 'scissor';
    }
}
let score = {
    wins: 0,
    loss: 0,
    tie: 0
};
let result = '';
function playGame(playerMove) {
    computerChance();
    if (playerMove === 'rock') {
        if (compMove === 'rock') {
            result = 'Tie'
        }
        else if (compMove === 'paper') {
            result = 'You Lose'
        }
        else if (compMove === 'scissor') {
            result = 'You Won'
        }
    }
    else if (playerMove === 'paper') {
        if (compMove === 'rock') {
            result = 'You Won'
        }
        else if (compMove === 'paper') {
            result = 'Tie'
        }
        else if (compMove === 'scissor') {
            result = 'You Lose'
        }
    }
    else if (playerMove === 'scissor') {
        if (compMove === 'rock') {
            result = 'You Lose'
        }
        else if (compMove === 'paper') {
            result = 'You Won'
        }
        else if (compMove === 'scissor') {
            result = 'Tie'
        }
    }
    const para = document.querySelector('.heading');
    if (result === 'You Won') {
        para.innerHTML = `<p class='won'>😎 You chose ${playerMove.toUpperCase()} <br>💻 Computer chose ${compMove.toUpperCase()} <br><br>🎉 You Win!</p>`;
        score.wins += 1;
        document.querySelector('#you').innerText = score.wins;
    }
    if (result === 'You Lose') {
        para.innerHTML = `<p class='lose'>😐 You chose ${playerMove.toUpperCase()}<br>💻 Computer chose ${compMove.toUpperCase()} <br><br>💥 You Lost! Try again.</p>`;
        score.loss += 1;
        document.querySelector('#comp').innerText = score.loss;
    }
    if (result === 'Tie') {
        para.innerHTML = `<p>🥲 You chose ${playerMove.toUpperCase()} <br>💻 Computer chose ${compMove.toUpperCase()} <br><br>⚖️ It's a Tie!</p>`;
        score.tie += 1;
        document.querySelector('#draw').innerText = score.tie;
    }
}
function reset() {
    score.wins = 0;
    score.loss = 0;
    score.tie = 0;
    document.querySelector('#draw').innerText = score.tie;
    document.querySelector('#comp').innerText = score.loss;
    document.querySelector('#you').innerText = score.wins;
    const para = document.querySelector('.heading');
    para.innerHTML = `<p>MAKE A MOVE</p>`;
}


const rulePopup = document.querySelector('.rule');

function rule() {
    rulePopup.classList.add('active')
}
function remove() {
    rulePopup.classList.remove('active')
}