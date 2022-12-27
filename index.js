const names=["Guadalupe", "Ollie", "Aki"];

function writeCards( names, event) {
    let completedCards = []
    for(let i = 0; i < names.length; i++){
        completedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        console.log(completedCards[i]);
        completedCards;
    }
}

writeCards(names, "Surprise")
