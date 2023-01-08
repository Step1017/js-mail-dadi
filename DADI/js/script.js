//-----------------------------------//ESERCIZIO DADI//---------------------------------//
//Generiamo numero casuale player
let playerNumber = Math.floor(Math.random() * 6 + 1);

//Gereriamo numero casuale pc
let pcNumber = Math.floor(Math.random() * 6 + 1);

console.log(playerNumber);
console.log(pcNumber);

//Confrontiamo i numeri generati e mostrate il risultato
if (playerNumber > pcNumber) {
    alert('Hai vinto!');
    console.log("Vince il giocatore con numero", playerNumber);
    console.log("Perde il PC con numero", pcNumber)
}
else if (playerNumber < pcNumber) {
    alert('Hai perso :-( ');
    console.log("Vince il PC con numero", pcNumber);
    console.log("Perde il giocatore con numero", playerNumber);
}
else {
    alert('Pareggio');
    console.log("Utente e PC pareggiano con numero", playerNumber);
}