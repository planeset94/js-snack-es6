/*
Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

/*
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

*/

/*
Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,punti fatti,falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

*/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clubs = [

    {
        nome: 'Milan',
        punti: 0,
        falli: 0,
    },

    {
        nome: 'Juve',
        punti: 0,
        falli: 0,
    },

    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
    },

    {
        nome: 'Como',
        punti: 0,
        falli: 0,
    },

    {
        nome: 'Liverpool',
        punti: 0,
        falli: 0,
    },

    {
        nome: 'Varese',
        punti: 0,
        falli: 0,
    },


];


for (let i = 0; i < clubs.length; i++) {
    clubs[i].punti = randomNumber(200, 1000);
    clubs[i].falli = randomNumber(0, 500);

};

console.log(clubs);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let newClubs = [];
for (let z = 0; z < clubs.length; z++) {
    let { nome, falli } = clubs[z];
    newClubs.push({ nome, falli });

};
console.log(newClubs);

