let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let balance = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let balanceEl = document.getElementById("balance-el")
let cardEl = document.getElementById("card-el")
let randomNumber = Math.floor( (Math.random() * 11) + 1)

console.log(cards)




function getRandomCard(){
    let randomNumber = Math.floor( (Math.random() * 13) + 1)

    if (randomNumber > 10 ){
        return 10 
    }else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }

    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: " 
    for( let i = 0 ; i< cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }





    sumEl.textContent = "Sum:" + " " + sum;
    if (sum <= 20) {

        message = "Yeni kart çekmek ister misiniz ? "
    } else if (sum === 21) {

        message = "Blackjack yaptınız! "
        balance += 5000
        hasBlackJack = true
    } else {

        message = "Kaybettiniz "
        balance -= 25
        isAlive = false
    }
    messageEl.textContent = message

    balanceEl.textContent =  "KESE : " + balance + "$"
}

function newCard() {

    message = "Yeni kart çekildi"
    messageEl.textContent = message

    if(isAlive === true && hasBlackJack === false ){

    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
   }
   else{
    message = "Daha fazla kart alamazsınız"
    messageEl.textContent = message

   }

}