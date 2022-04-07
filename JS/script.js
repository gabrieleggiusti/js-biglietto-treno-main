
/* Richiesta dati */
const nkm = prompt ('Quanti chilometri devi percorrere?');
const etaPasseggero = prompt ('Qual è la tua età?');

/* Calcolo prezzo biglietto */
let biglietto = nkm * 0.21;

console.log ('biglietto',biglietto);

console .log
if (etaPasseggero < 18) {
  biglietto += 0.8;
} else if (etaPasseggero > 65) {
  biglietto += 0.6;
};
console.log ('biglietto',biglietto);

const message =" Il prezzo del biglietto è di € "+biglietto.toFixed(2);

console.log(message)

document.getElementById('result').innerHTML = message;
