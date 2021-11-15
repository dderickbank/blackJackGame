
let player = {
    name: "Derick",
    chips:  145
}
let cards = [] //ordered list of items
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": €" + player.chips + ",-"

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
console.log(getRandomCard())

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards.length
    // sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards:  " 
    for (let i = 0; i < cards.length; i ++){

        cardsEl.textContent += cards[i] + " "
    }
    
    
    sumEl.textContent = "Sum: " + sum
    if ( sum <= 20){
    message = "Do you want to draw a new card ?"
    } else if (sum === 21){
    message = "Blackjack !"
    hasBlackjack = true 
    } else {
    message = "You're out of the game!"
    isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


let castleListing = {
    name: "pureCastle East London",
    location: ["UK", "London", "Westminster"],
    maxGuests: 27,
    freeParking: true,

}

console.log(castleListing.freeParking +". " + castleListing.location[2] + ", " +castleListing.location[0] +", "+ castleListing.location[1])

