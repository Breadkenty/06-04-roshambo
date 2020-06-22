let playerOneChoice = ''
let playerTwoChoice = ''

function updatePlayerSelectionImage() {
  document.querySelector(
    '.player-one-random-choice img'
  ).src = `svg/${playerOneChoice}.svg`

  document.querySelector(
    '.player-two-random-choice img'
  ).src = `svg/${playerTwoChoice}.svg`
}

function whoWon() {
  const playerOneChoiceImage = document.querySelector(
    '.player-one-random-choice img'
  )
  const playerTwoChoiceImage = document.querySelector(
    '.player-two-random-choice img'
  )

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissor') ||
    (playerOneChoice === 'rock' && playerTwoChoice === 'lizard')
  ) {
    playerOneChoiceImage.classList.add('show-winner')
    return 'Player one wins!'
  } else if (
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'spock')
  ) {
    playerOneChoiceImage.classList.add('show-winner')
    return 'Player one wins!'
  } else if (
    (playerOneChoice === 'scissor' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'scissor' && playerTwoChoice === 'lizard')
  ) {
    playerOneChoiceImage.classList.add('show-winner')
    return 'Player one wins!'
  } else if (
    (playerOneChoice === 'lizard' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'lizard' && playerTwoChoice === 'spock')
  ) {
    playerOneChoiceImage.classList.add('show-winner')
    return 'Player one wins!'
  } else if (
    (playerOneChoice === 'spock' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'scissor')
  ) {
    playerOneChoiceImage.classList.add('show-winner')
    return 'Player one wins!'
  } else if (playerOneChoice === playerTwoChoice) {
    return "it's a draw!"
  } else {
    playerTwoChoiceImage.classList.add('show-winner')
    return 'Player two wins!'
  }
}

function resetGame() {
  playerOneChoice = ''
  playerTwoChoice = ''
  document.querySelector('.main-menu').classList.add('show-screen')
  document
    .querySelector('.player-one-random-choice img')
    .classList.remove('show-winner')
  document
    .querySelector('.player-two-random-choice img')
    .classList.remove('show-winner')
  document.querySelector('.results h2:last-of-type').textContent = ''
  document.querySelector('.results input').classList.add('hide')
}

const main = () => {
  const mainMenu = document.querySelector('.main-menu')
  const rules = document.querySelector('.rules')
  const playerOneTurnScreen = document.querySelector('.player-one-turn')
  const playerOneChoices = document.querySelectorAll('.player-one-turn li')
  const playerTwoTurnScreen = document.querySelector('.player-two-turn')
  const playerTwoChoices = document.querySelectorAll('.player-two-turn li')
  const preResultScreen = document.querySelector('.pre-results')
  const resultScreen = document.querySelector('.results')

  // Display rules
  document
    .querySelector('nav h2:nth-child(3)')
    .addEventListener('click', function () {
      mainMenu.classList.remove('show-screen')
      rules.classList.add('show-screen')
    })

  document.querySelector('.close-rules').addEventListener('click', function () {
    rules.classList.remove('show-screen')
    mainMenu.classList.add('show-screen')
  })

  // Start player turn
  document
    .querySelector('nav h2:first-child')
    .addEventListener('click', function () {
      playerOneTurnScreen.classList.add('show-screen')
      mainMenu.classList.remove('show-screen')
    })

  // Player one turn
  playerOneChoices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
      const choiceSelected = event.target.className
      playerOneChoice = playerOneChoice + choiceSelected
      playerTwoTurnScreen.classList.add('show-screen')
      playerOneTurnScreen.classList.remove('show-screen')
    })
  })

  // Player two turn
  playerTwoChoices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
      const choiceSelected = event.target.className
      playerTwoChoice = playerTwoChoice + choiceSelected
      playerTwoTurnScreen.classList.remove('show-screen')
      preResultScreen.classList.add('show-screen')
    })
  })

  // Pre results screen
  document
    .querySelector('.pre-results input')
    .addEventListener('click', function () {
      preResultScreen.classList.remove('show-screen')
      resultScreen.classList.add('show-screen')
      updatePlayerSelectionImage()
      const winnerDisplay = document.querySelector('.results h2:last-of-type')
      let counter = 0
      const images = [
        'svg/rock.svg',
        'svg/paper.svg',
        'svg/scissor.svg',
        'svg/lizard.svg',
        'svg/spock.svg',
      ]

      const intervalId = setInterval(() => {
        document.querySelector('.player-one-random-choice img').src =
          images[counter % images.length]
        document.querySelector('.player-two-random-choice img').src =
          images[images.length - 1 - (counter % images.length)]
        counter++
        if (counter > 30) {
          clearInterval(intervalId)
          updatePlayerSelectionImage()
          winnerDisplay.textContent = whoWon()
        }
        if (counter === 30) {
          document.querySelector('.results input').classList.remove('hide')
        }
      }, 100)
    })

  // Results screen

  // // Try again
  document
    .querySelector('.results input')
    .addEventListener('click', function () {
      resultScreen.classList.remove('show-screen')
      resetGame()
    })
}

document.addEventListener('DOMContentLoaded', main)
