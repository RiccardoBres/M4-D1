//1-crea una funzione che controlli due numeri interi. Ritorna true se uno dei due è 50 o se la somme dei due è 50

/*function number(x,y) {
    if ((x === 50  || y ===50)||(x+y === 50)) {
        return "true"
    }else {
        return "false"
    }
}

let result = number(50,12)
console.log(result); */

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