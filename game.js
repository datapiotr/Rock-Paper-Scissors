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

const hands = document.querySelectorAll('.select img')

function handSelection() {
    game.playerHand = this.dataset.option
    hands.forEach(hand => {
        hand.style.boxShadow = ''
    })
    this.style.boxShadow = '0 0 0 4px yellow'
}

function aiChoice() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option
}

function checkResult(player, ai) {
    if (player === 'kamień' && ai === 'nożyczki' || player === 'nożyczki' && ai === 'papier' || player === 'papier' && ai === 'kamień') {
        return 'Win!'
    } else if (player === ai) {
        return 'Draw!'
    } else {
        return 'Loss!'
    }
}

function startGame() {
    if (!game.playerHand) return alert('wybierz dłoń!')
    game.aiHand = aiChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand)
    console.log(gameResult)
}

hands.forEach(hand => {
    hand.addEventListener('click', handSelection)
})


document.querySelector('.start').addEventListener('click', startGame)