// // Chiedere all’utente di inserire una parola

// var parola = prompt("Inserisci la parola che preferisci:");

// console.log(parola);


// // Creare una funzione per capire se la parola inserita è palindroma

// // divisione parola in lettere

// var parolaDivisaInLettere = parola.split('');

// console.log(parolaDivisaInLettere);


// // inversione della parola divisa in lettere

// var parolaDivisaInLettere = parolaDivisaInLettere.reverse();

// console.log(parolaDivisaInLettere);


// // riunione delle lettere della parola divisa e invertita

// var parolaDivisaInLettere = parolaDivisaInLettere.join('');

// console.log(parolaDivisaInLettere);


// // condizione


// if(parola == parolaDivisaInLettere){
//     console.log('la parola è palindroma');
// } else {
//     console.log('la parola non è palindroma');
// }




var parola = prompt("Inserisci la parola che preferisci:");

var parolaPalindroma = inverso(parola);

if(parola == parolaPalindroma){
    console.log('la parola è palindroma');
  } 
else {
    console.log('la parola non è palindroma');
}

function inverso (stringa) {
var stringaInversa = stringa.split('').reverse().join('');  
  return stringaInversa;
}
    
