// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato

// Creo una lista di email autorizzate
// Chiedo l'email all'untente
// Controllo che il dato inserito sia corretto
// Confronto il dato con la lista
// Se l'email inserita è nella lista, stampo un messaggio appropriato
// Se l'email inserita NON è nella lista, stampo un messaggio appropriato

authEmailAddrList = [
    'elliot.alderson@robot.mr',
    'darlene.alderson@robot.mr',
    'angela.moss@robot.mr',
    'tyrell.wellick@robot.mr'
];

var userEmail = prompt('Inserisci il tuo indirizzo email');
var existingEmail = false;

for (var i = 0; i < authEmailAddrList.length; i++) {
    if (userEmail == authEmailAddrList[i] ) {
        existingEmail = true;
    }
}

if (existingEmail) {
    console.log('Benvenuto');
} else {
    console.log('Email inesistente');
}

console.log('-------------------');

// Gioco dei dadi, chi fa di più vince

// Untente1 lancia il primo dado da 6, ottengo il primo punteggio
// Utente2 lancia il seocndo dato da 6, ottengo il primo punteggio
// Se il primo punteggio > del secondo, Utente1 vince
// Altrimenti se il primo punteggio < del secondo, Utente2 vince
// Altrimenti sono pari

// Dado da 10
console.log('DADI DA 10 FACCE');
var firstDice10 = Math.ceil(Math.random() * 10);
console.log('Dado1: ' + firstDice10);
var secondDice10 = Math.ceil(Math.random() * 10);
console.log('Dado2: ' + secondDice10);

if (firstDice10 < secondDice10) {
    console.log('Il Dado2 vince');
} else if (firstDice10 > secondDice10) {
    console.log('Il Dado 1 vince');
} else {
    console.log('Parità');
}

console.log('-------------------');

// Dado da 6
console.log('DADI DA 6 FACCE');
var firstDice6 = Math.floor(Math.random() * 6) + 1;
console.log('Dado1: ' + firstDice6);
var secondDice6 = Math.floor(Math.random() * 6) + 1;
console.log('Dado2: ' + secondDice6);

if (firstDice6 < secondDice6) {
    console.log('Il Dado2 vince');
} else if (firstDice6 > secondDice6) {
    console.log('Il Dado 1 vince');
} else {
    console.log('Parità');
}
