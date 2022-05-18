"use strict"

//Con i primi due comandi o variabili chiediamo l'età del passeggero
const età = prompt(`Quanti anni hai?`);
const distanzaTot = prompt(`Quanti kilometri percorrerai?`);

//il prezzo del biglietto è di 0.21€ al Km. 
const prezzoKm = 0.21;

//Per calcolare il prezzo del biglietto si moltiplica
//il prezzo al Km per il totale dei Km percorsi.
let prezzoTot = prezzoKm * distanzaTot;

//età limite 18
const firstAge = 18;
//età limite 65
const secondAge = 65;

//sconto del 20%
//si ottiene dividendo per 100 il prezzo totale del biglietto
//e moltiplicando per 20 
const sconto1 = ((prezzoTot / 100) * 20); 

//sconto del 40%
const sconto2 = ((prezzoTot / 100) * 40);


//la prima condizione è:
//Il passeggero che ha MENO di 18 anni ha lo sconto sul prezzo totale del 20%.
if (età < firstAge){
    prezzoTot = prezzoTot - sconto1;
    //console.log mi serve per visualizzare la corretteza delle condizioni
    console.log(`Hai un età inferiore a ${firstAge} anni ti è stato applicato uno sconto del 20% al prezzo totale`)
    console.log(`Il prezzo totale è di${prezzoTot}€`)
}
else if (età >= firstAge && età <= secondAge){
    prezzoTot = prezzoKm * distanzaTot;
    //console.log mi serve per visualizzare la corretteza delle condizioni
    console.log(`Il prezzo totale è di ${prezzoTot}€`)
} 

//la seconda condizione è:
//il passeggero che ha PIù di 65 anni ha uno sconto sul prezzo totale del 40%.
if (età > secondAge){
    prezzoTot = prezzoTot - sconto2;
    //console.log mi serve per visualizzare la corretteza delle condizioni
    console.log(`Hai un età maggiore di ${secondAge}anni ti è stato applicato uno sconto del 40% al prezzo totale`)
    console.log(`Il prezzo totale è di ${prezzoTot}€`)
}

document.getElementById(`user-age`).innerHTML = età;
document.getElementById(`kmt-dist`).innerHTML = distanzaTot;
document.getElementById(`price-tot`).innerHTML = prezzoTot + `€`;

