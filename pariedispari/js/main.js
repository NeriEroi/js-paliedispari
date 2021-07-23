// L’utente sceglie pari o dispari 

var pariDispari = prompt("Pari o Dispari?");

console.log(pariDispari);


// e inserisce un numero da 1 a 5

var inserisciNumero = parseInt(prompt("Inserisci un numero da uno a cinque:"));

console.log(inserisciNumero);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)

function numeroCpu(min, max) {
    return Math.floor(Math.random() * max) + min;
}


console.log(numeroCpu(1, 5));


// Sommiamo i due numeri

var somma = inserisciNumero + numeroCpu(1, 5);

console.log(somma);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)


if (somma %2 == 0) {
    console.log("la somma è pari");
} else {
    console.log("la somma è dispari");
}


// Dichiariamo chi ha vinto.

if ((pariDispari == "pari") && (somma %2 == 0)) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}
