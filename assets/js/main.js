/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

/* Strumenti:
    - number() prompt
    - const / let
    - console-log
    - math
    - if / else
    - getElementById
*/

//chiedere all'utente i km da percorrere e registrarli
const kilometres = Number(prompt('Quanti chilometri dovrai percorrere?'));
console.log(kilometres);

//chiedere all'utente l'età e registrarla
const userAge = Number(prompt('Quanti anni hai?'));
console.log(userAge);

//definire la variabile del prezzo al chilomentro (euro 0,21)
const pricePerKilometre = 0.21;
console.log(pricePerKilometre);

//calcolare il prezzo del biglietto moltiplicando il numero di chilometri per il prezzo al chilometro
let price = kilometres * pricePerKilometre;
console.log(price);

//verificare se l'utente ha un'età inferiore ai 18 anni ed applicare lo sconto del 20% o se l'utente ha un'età superiore ai 65 anni ed applicare lo sconto del 40% altrimenti non applicare nessuno sconto (dare un prezzo con massimo due numeri decimali)
if (userAge < 18) {
    price = price - (price * 0.20).toFixed();
    
} else if (userAge > 65) {
    price = price - (price * 0.40).toFixed();
} else {
    price = price
}

//aggiungere un h1 con id per mostrare il prezzo in schermata

//selezionare e salvare in una variabile l'elemento della dom con getElementById
const nameElement = document.getElementById('finalPrice')

//comunicare all'utente il costo del biglietto
nameElement.innerHTML=`Il prezzo per il tuo biglietto è di ${price} euro`;