// L’utente sceglie pari o dispari 

var pariOdispari = prompt("Pari o dispari?");

console.log(pariOdispari);


// ...e inserisce un numero da 1 a 5

var numId = parseInt(prompt("Inserisci un numero da 1 a 5 :"));

console.log(numId);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)

function cpuNum (min, max) {
    var cpu = Math.round(Math.random() * max) + min;
    return cpu;
}

numeroCpu = cpuNum(1, 4)

console.log(numeroCpu);


// Sommiamo i due numeri

somma = numId + numeroCpu;

console.log(somma);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

if (somma % 2 == 0) {
    console.log("la somma è pari");
} else {
    console.log("la somma è dispari");
}


// Dichiariamo chi ha vinto

if ((pariOdispari == "pari") && (somma % 2 == 0)) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}
