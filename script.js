/* Crea una funzione che controlli due numeri inter. Ritorna `true` se uno dei due è50 o se la somma dei due è 50*/

function somma(a, b) {
    if(a + b === 50) {
        return true;
    } else if (a === 50 || b === 50) {
        return true;
    } else {
        return false; 
    }
}

console.log(somma(25, 25));

/* Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata */

function deleteChar(stringa, posizione) {
    let stringa2 = stringa.substring(0, posizione) + stringa.substring(posizione + 1);
    return stringa2;
}

console.log(deleteChar("ciao", 3));

/* crea una funzione che controlli se due numeri siano compresi tra e 60 o tra 70 e 100. Ritorna true se rispecchiano queste condizioni, altrimenti ritorna false */

function compresi(a, b) {
    if (a>40 && b>40 && a<60 && b<60 || a>70 && b>70 && a<100 && b<100) {
        return true;
    } else {
        return false;
    }
}

console.log(compresi(99, 71));

/* Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti `false */

function città(città) {
    let stringa = città.substring(0,3).toLowerCase();
    // console.log(stringa);
    if(stringa === `los` || stringa === "new") {
        return true;
    } else {
        return false; 
    }
}

console.log(città(`antonio York`));

/* Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro */

function sommaTotale(numeri) {
    let somma = 0;
    numeri.forEach(numero => {
        somma += numero;
    });

    return somma;
}

console.log(sommaTotale([1, 2, 3, 4]))

/* Crea una funzione che ontrolli che un array non contenga i numeri 1 o 3. Se non li contiene, ritorna `true`, altirmenti ritorna `false` */
function nonContenga(numeri) {
    for(let numero of numeri) {
        if(numeri[numero]=== 1 || numeri[numero]=== 3) {
            return false;
        }
    }
    return true;
}

console.log(nonContenga([1, 2, 4, 5, 6, 7]));

/* Crea una funzione per trovare il tipo di un angolo in cui i gradi sono passati come parametro. Angolo acuto: meno di 90° -> ritorna acuto. Angolo ottuso: tra i 90° e i 180° -> ritorna ottuso. Angolo retto: 90° -> ritorna retto. Angolo piatto: 180° -> ritorna piatto.  */

function tipoAngolo(angolo) {
    if (angolo === 90) {
        return `retto`;
    } else if (angolo === 180) {
        return `piatto`;
    } else if (angolo < 90) {
        return `acuto`;
    } else if(angolo > 90 && angolo < 180) {
        return `ottuso`;
    } else {
        return false;
    }
}

console.log(tipoAngolo(95));

/* Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve tornare "FIAT" */

function acronimo(stringa) {
    // split convete una stringa in array, se specifichiamo un separatore riusciremo a creare una array di parole
    let parole = stringa.split(` `);
    let acronimo = ``;
    
    parole.forEach(parola => {
        acronimo += parola[0].toUpperCase();
        // console.log(acronimo);
    })
    console.log(acronimo);
}

acronimo(`federazinoe italina automobili torino`);

/*---------------------------------------------------*/

// ESERCIZI EXTRA (DEVONO ESSERE TUTTI SVOLTI CON LE FUNZIONI)

/* 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa. */

function piùVolte (parola) {
    let contatore = 0; 
    let piùRipetute = 0;
    let carattereMaggiore = ``;
    // ciclo per scorrere la prima volta
    for(let carattere in parola){
        //ciclo per scorrere una seconda volta la parola, confrontando ogni char 
        for(let char in parola){
            if(parola[char] === parola[carattere]) {
                contatore++;
            }
        }
        if(contatore > piùRipetute) {
            piùRipetute = contatore
            carattereMaggiore = parola[carattere];
            contatore = 0;
        } else {
            contatore = 0;
        }
    }
    console.log(`il carattere più ripetuto è: ${carattereMaggiore.toLocaleUpperCase()} con ${piùRipetute} ripetizioni`);
}

piùVolte(`cccciaooooo`);

/* 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.  stringa.replace(/[^\w]/g, '')*/

function anagramma(stringa1, stringa2) {
    //prima di tutto devo pulire le stringhe da eventuali spazi e tipi di punteggiatura
    stringa1 = stringa1.replace(/[^\w]/g, '');
    stringa2 = stringa2.replace(/[^\w]/g, '');

    //dopo aver pulito, posso scorrere stringa con stringa e rimuover il char, alla fine dovrei avere una "stringa" vuota, sennò dovrei trovarmi qualche carattere
    let indice = 0;
    for(let char in stringa1){
        if(stringa1[char] === stringa2[indice]) {
            stringa2[indice] === ``;
        }
    }
}

/* 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
ES.
N=2
[[1, 2],[4, 3]]

N=3
[[1, 2, 3],[8, 9, 4],[7, 6, 5]]

N=4
[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]
*/

function spirale (dimensione) {
    // let colonne = 0;
    // let righe = 0;
    let matrice = [];
    for(let i = 0; i<dimensione; i++){
        for(let j = 0; j<dimensione; j++){
            matrice[j]=j+1;
        }
    }
    console.log(matrice);
}

// 1  2   3
// 8  9   4
// 7  6   5