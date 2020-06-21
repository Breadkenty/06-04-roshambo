let playerOneChoice = ''
let playerTwoChoice = ''

const main = () => {
  const rules = document.querySelector('.rules')
  const playerOneTurnScreen = document.querySelector('.player-one-turn')
  const playerOneChoices = document.querySelectorAll('.player-one-turn li')
  const playerTwoTurnScreen = document.querySelector('.player-two-turn')
  const playerTwoChoices = document.querySelectorAll('.player-two-turn li')
  const preResultScreen = document.querySelector('.pre-results')
  const resultScreen = document.querySelector('.results')

  // Display rules

  document
    .querySelector('nav h2:nth-child(2)')
    .addEventListener('click', function () {
      rules.classList.add('show-screen')
    })

  document.querySelector('.close-rules').addEventListener('click', function () {
    rules.classList.remove('show-screen')
  })

  // Start player turn

  document
    .querySelector('nav h2:first-child')
    .addEventListener('click', function () {
      playerOneTurnScreen.classList.add('show-screen')
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
    })

  // Results screen

  const svgToCycle = [
    {
      name: 'rock',
      src: 'svg/rock.svg',
    },
    {
      name: 'paper',
      src: 'svg/paper.svg',
    },
    {
      name: 'scissor',
      src: 'svg/scissor.svg',
    },
    {
      name: 'lizard',
      src: 'svg/lizard.svg',
    },
    {
      name: 'spock',
      src: 'svg/spock.svg',
    },
  ]

  const playerRandomImage = document.querySelector(
    '.player-one-random-choice img'
  )

  let updateplayerRandomImage = (playerRandomImage.src = `svg/rock.svg`)
  // // Try again
  document
    .querySelector('.results input')
    .addEventListener('click', function () {
      resultScreen.classList.remove('show-screen')
    })
}

document.addEventListener('DOMContentLoaded', main)
