document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'bike',
        img: 'Assets/bike.jpg'
      },
      {
        name: 'brownie',
        img: 'Assets/brownie.jpg'
      },
      {
        name: 'dog',
        img: 'Assets/dog.jpg'
      },
      {
        name: 'donut',
        img: 'Assets/donut.jpg'
      },
      {
        name: 'merc',
        img: 'Assets/merc.jpg'
      },
      {
        name: 'pizza',
        img: 'Assets/pizza.jpg'
      },
      {
        name: 'cake',
        img: 'Assets/cake.jpg'
      },
      {
        name: 'tiger',
        img: 'Assets/tiger.jpg'
      },
      {
        name: 'bike',
        img: 'Assets/bike.jpg'
      },
      {
        name: 'brownie',
        img: 'Assets/brownie.jpg'
      },
      {
        name: 'dog',
        img: 'Assets/dog.jpg'
      },
      {
        name: 'donut',
        img: 'Assets/donut.jpg'
      },
      {
        name: 'merc',
        img: 'Assets/merc.jpg'
      },
      {
        name: 'pizza',
        img: 'Assets/pizza.jpg'
      },
      {
        name: 'cake',
        img: 'Assets/cake.jpg'
      },
      {
        name: 'tiger',
        img: 'Assets/tiger.jpg'
      }
      
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const endDisplay = document.querySelector('#end')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Assets/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Assets/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'Assets/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Yayyy! You found a match')
        cards[optionOneId].setAttribute('src', 'Assets/white.png')
        cards[optionTwoId].setAttribute('src', 'Assets/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'Assets/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'Assets/blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = cardsWon.length;
        endDisplay.textContent = "Congo! You won the game.";
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })