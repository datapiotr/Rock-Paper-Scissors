// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}


const game = {
    playerHand: '',
    aiHand: ''
}

const hands = document.querySelectorAll('.choice')

function handSelection() {
    game.playerHand = this.dataset.option
    hands.forEach(hand => {
        hand.style.transform = 'scale(1)'
    })
    this.style.transform = 'scale(1.5)'
}

function aiChoice() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option
}

function checkResult(player, ai) {
    if (player === 'rock' && ai === 'scissors' || player === 'scissors' && ai === 'paper' || player === 'paper' && ai === 'rock') {
        return 'Win!'
    } else if (player === ai) {
        return 'Draw!'
    } else {
        return 'Loss!'
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player
    document.querySelector('[data-summary="ai-choice"]').textContent = ai

    if (player === 'rock') {
        document.querySelector('.your-hand').innerHTML = '✊'
    } else if (player === 'paper') {
        document.querySelector('.your-hand').innerHTML = '✋'
    } else if (player === 'scissors') {
        document.querySelector('.your-hand').innerHTML = '✌'
    }

    if (ai === 'rock') {
        document.querySelector('.ai-hand').innerHTML = '✊'
    } else if (ai === 'paper') {
        document.querySelector('.ai-hand').innerHTML = '✋'
    } else if (ai === 'scissors') {
        document.querySelector('.ai-hand').innerHTML = '✌'
    }

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers

    if (result === 'Win!') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins
        document.querySelector('[data-summary="who-win"]').textContent = "You win"
        document.querySelector('[data-summary="who-win"]').style.color = 'green'
    } else if (result === 'Loss!') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses
        document.querySelector('[data-summary="who-win"]').textContent = "Computer win"
        document.querySelector('[data-summary="who-win"]').style.color = 'red'
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws
        document.querySelector('[data-summary="who-win"]').textContent = "Draw"
        document.querySelector('[data-summary="who-win"]').style.color = 'black'
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.transform = 'scale(1)'
    game.playerHand = ''
}

function startGame() {
    if (!game.playerHand) return alert('check a hand!')
    game.aiHand = aiChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand)
    console.log(gameResult)
    publishResult(game.playerHand, game.aiHand, gameResult)
    endGame()
}

hands.forEach(hand => {
    hand.addEventListener('click', handSelection)
})


document.querySelector('.start').addEventListener('click', startGame)