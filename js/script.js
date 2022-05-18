"use strict"
//Con i primi due comandi chiediamo l'età del passeggero
const età = prompt(`Quanti anni hai?`);
const distanza = prompt(`Quanti kilometri percorrerai?`);

//il prezzo del biglietto è di 0.21€ al Km. 
const prezzoKm = 0.21;


//Per calcolare il prezzo del biglietto si moltiplica
//il prezzo al Km per il totale dei Km percorsi.
let prezzoTot = prezzoKm * distanza;

//sconto del 20%
let sconto1 = (prezzoTot / 100) * 20; 

//età limite 18
const firstAge = 18;
//età limite 65
const secondAge = 65;

/* console.log(prezzoTot); // inserito momentaneamente */

//la prima condizione è:
//Il passeggero che ha MENO di 18 anni ha lo sconto sul prezzo totale del 20%.
if (età < firstAge){
    prezzoTot = prezzoTot - sconto1;
    console.log(`Hai un età inferiore a ${firstAge}anni ti è stato applicato uno sconto del 20% al prezzo totale`)
    console.log(`il prezzo totale è di${prezzoTot}`)
}
else if (età > firstAge && età <= secondAge){
    prezzoTot = prezzoKm * distanza;
    console.log(`Il prezzo totale è di ${prezzoTot}`)
} 

