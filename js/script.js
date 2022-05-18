"use strict"
//Con i primi due comandi chiediamo l'età del passeggero
const età = prompt("Quanti anni hai?");
const distanza = prompt("Quanti kilometri percorrerai?");

//il prezzo del biglietto è di 0.21€ al Km. 
const prezzoKm = 0.21;

//Per calcolare il prezzo del biglietto si moltiplica
//il prezzo al Km per il totale dei Km percorsi.
const prezzoTot = prezzoKm * distanza;

/* console.log(prezzoTot); // inserito momentaneamente */

//la prima condizione è:
//Il passeggero che MENO di 18 anni ha lo sconto sul prezzo totale del 20%.
if () 