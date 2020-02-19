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

for (var i = 0; i < authEmailAddrList.length; i++) {
    if (userEmail === authEmailAddrList[i] ) {
        console.log('Benvenuto ' + userEmail);
    }
}
