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

// ALTERNATIVA
let biciLeggera= bike[0];
for (let i=0; i<bike.length; i++){
    let bycicle = bike[i];
    if(bycicle.peso<bicileggera.peso){
        bicileggera=bike[i];
    };

};

console.log(bicileggera);
const {nome, peso}=bicileggera;
*/

/*
Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,punti fatti,falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

*/
/*
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
    //COme faccio a creare un oggetto ad ogni ciclo?
};
console.log(newClubs);

*/

/* SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/
//VECCHIO MODO 
/*
let example = (array, a, b) => {
    if (a < b) {
        let list = [];
        for (let i = 0; i < array.length; i++) {

            if (i >= a && i <= b) {
                list.push(array[i]);
            };
        };

        return list;
    };

};

const matrice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = 4;
let b = 9;
let risultato = example(matrice, a, b);
console.log(risultato);
*/
//forEach:
/*
let example = (array, a, b) => {
    if (a < b) {
        let list = [];
        array.forEach((element, i, array) => {
            if (i >= a && i <= b) {
                list.push(array[i]);
            };
        });

        return list;
    };

};
const matrice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = 4;
let b = 9;
let risultato = example(matrice, a, b);
console.log(risultato);
*/

// FILTER:
let example = (array, a, b) => {
    if (a < b) {
        const x = array.filter(function (el) {
            if (el >= a && el <= b) {
                return true;
            };
            return false;
        });
        console.log(x);
    };
};

const matrice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = 4;
let b = 9;
example(matrice, a, b);

