/*
Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

let bike = [

    {
        nome: 'bianchi',
        peso: 11,
    },

    {
        nome: 'vertek',
        peso: 14,
    },
    {
        nome: 'btwin',
        peso: 9,
    },


];

console.log(bike);

let listaPesi = [];
for (let i = 0; i < bike.length; i++) {
    let { peso } = bike[i];
    listaPesi.push(peso);
};
console.log(listaPesi);
let pesoMinore = Math.min(...listaPesi);
let bikeEl = document.getElementById('bike');
bikeEl.innerHTML = `
<ul>La bici più leggera pesa: ${pesoMinore} Kg.</ul>
`;

