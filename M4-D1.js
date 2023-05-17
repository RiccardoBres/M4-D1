//1-crea una funzione che controlli due numeri interi. Ritorna true se uno dei due è 50 o se la somme dei due è 50

/*function number(x,y) {
    if ((x === 50  || y ===50)|| x+y === 50) {
        return "true"
    }else {
        return "false"
    }
}

let result = number(50,12)
console.log(result); */


// crea una funzione che rimuova un carattere ad una posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata

/*
function modify(stringa,position) {
      if (position > stringa.lenght && position < 0 ) {
         return
      }  
      return stringa.slice(0,position) + stringa.slice (position +1)
} */

// crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.Ritorna true se rispecchiano queste condizioni, altrimenti false

/*function range (x,y) {
    if (((x>=40 && x<=60) || (x>=70 && x<=100)) && ((y>=40 && y<=60) || (y>=70 && y<=100))) {
        return "true"
    } else {
        return "false"
    }
}
let result = range(50,20)
console.log(result) */


// 4 - Crea una funzione che accetti un nome di città come parametro e titorni il nome stesso se inizia con "los" o "new" altrimenti ritorni false

/*function city(x) {
    if ( x.includes("Los") || x.includes("New")) {
        return x
    } else {
        return "false"
    }
}
let result = city("New Mexico")
console.log(result) */

// 5- crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve passare come parametro 

/* let myArray = [1,5,15,14,7,5]
let numbers = 0;

function somma() {
    for (i=0; i< myArray.length; i++) {
        numbers += myArray[i];
    }
    return numbers;
}

let result = somma(myArray)
console.log(result) */

//crea una funzione che controlli che un array non contenga numeri 1 o 3. Se non li contiene ritorna true

/*let myArray = [3,5,15,14,7,5]

function somma() {
    for (i=0; i< myArray.length; i++) {
        if (myArray[i] === 1 || myArray[i] === 3) {
            return false
        } else {
            return true
        }
    }
   
}

let result = somma(myArray)
console.log(result) */

/*crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro;
angolo acuto = meno di 90 -- ritorna "acuto"
ottuso = tra i 90 e i 180
angolo retto = 90 gradi 
angolo piatto = 180 gradi */

/*function angoli(x) {
   
        if (x<90) {
          console.log(acuto);   
        } else if (x>=91 && x<=179) {
           console.log("Ottuso")
        } else if (x===90) {
            console.log("retto");
        } else if (x===180) {
            console.log("piatto");
        } else {
            console.log("nessun angolo")
        }  
    }
    

angoli (90) */


// crei una funzione che crei un acronimo a partire da una frase
/*let frase = "Fabbrica Italiana Automobili Torino"

function acronimo() {
 let acronimo = ""
 let fras = frase.split(" ");
 for (let i = 0; i < fras.length; i++) {
    acronimo += fras[i][0];
 }  console.log(acronimo);
}

acronimo()*/

//Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.



function myLetter(stringa) { 
    let count = {}; 
    for (i = 0; i < stringa.length; i++) { 
        const letter = stringa[i];
        if (count[letter]) { 
            count[letter]++  
        } else {
            count[letter] = 1;
        }
    }
let repet;
let repetCount=0;

for (const letter in count) { 
    if (count[letter]>repetCount) {
        repetCount = count[letter];
        repet = letter
    }
 } return repet
}



const stringa = "Ciccione"
const repet = myLetter(stringa)
console.log(repet);