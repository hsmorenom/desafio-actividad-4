// Crea una lista vacía llamada "listaGenerica".
listaGenerica = [];

/* Crea una lista de lenguajes de programación llamada
"lenguagesDeProgramacion con los siguientes elementos:
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'*/

lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

/*Agrega a la lista
 "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'*/
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/* Crea una función que muestre en la 
consola todos los elementos de la lista "lenguagesDeProgramacion*/
function consola(){
    for( let i=0; i < lenguagesDeProgramacion.length ; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}

consola();
/*Crea una función que muestre en la consola todos los elementos de 
la lista "lenguagesDeProgramacion en orden inverso*/
function consolaInversa(){
    for( let i=lenguagesDeProgramacion.length-1; i >=0 ; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}
consolaInversa();
//Crea una función que calcule el promedio de los elementos en una lista de números.//

let numeros=[2,4,6,8,10];

function calculoPromedio(array) {
    let suma = 0;
    for (let i= 0; i < array.length; i++) {
        suma += array [i];
    }
    let promedio = suma/array.length;
    return promedio;

}

let promedio = calculoPromedio(numeros);
console.log(promedio);
/*Crea una función que muestre en la 
consola el número más grande y el número más pequeño en una lista*/

let numeros1=[2,4,10,8,3];

function mayorMenor(lista){
    let mayor= lista [0];
    let menor= lista [0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]>mayor) {
            mayor = lista [i];
        }
        if (lista[i]<menor){
            menor = lista[i]
        }
    }
    console.log(mayor);
    console.log(menor);
}

mayorMenor(numeros1);

//Crea una función que devuelva la suma de todos los elementos en una lista.

let numeros2=[1,2,3,4,5,6];

function sumaTodos(valor) {
    let suma = 0;
    for (let i = 0; i<valor.length; i++) {
        suma += valor[i];
    }
    console.log(suma);
}
sumaTodos(numeros2);

/*Crea una función que devuelva la posición en la lista donde se encuentra
 un elemento pasado como parámetro, o -1 si no existe en la lista*/

let colores=["amarillo" , "azul" , "rojo" , "verde" ];
function localizacion(lista,elemento) {
    for (let i= 0; i < lista.length; i++) {
        if (lista[i]===elemento) {
            return i;
        };
    }
    return -1;  
} 

console.log(localizacion(colores,prompt("que color quiere ubicar amarillos, azul, rojo o verde?:")));

/*Crea una función que reciba dos listas de números 
del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno*/

let grupo1=[2,4,6,8,10];
let grupo2=[1,3,5,7,9];
let grupo3=[10,20];

function fusion(comparar, comparar2) {
    let nuevo= [];
    if( comparar.length !==comparar2.length){
        console.log(" grupos de diferente tamaño");
    }else {
        for (let i = 0; i < comparar.length; i++) {
            nuevo.push(comparar[i], comparar2[i]);   
        }
        return nuevo;
    }     
}
let fusionado= fusion(grupo1, grupo2);
console.log(fusionado); 

function sumaTodos2(valor) {
    let suma = 0;
    for (let i = 0; i<valor.length; i++) {
        suma += valor[i];
    }
    console.log(suma);
}
sumaTodos2(fusionado);

/*Crea una función que reciba una lista de números
 y devuelva una nueva lista con el cuadrado de cada número*/
 let grupo5=[2,4,6,8,10];
 let grupo4=[1,3,5,7,9];
 
 
 function union(comparar, comparar2) {
    let nuevo= [];
    for (let i = 0; i < comparar.length; i++) {
        nuevo.push(comparar[i], comparar2[i]);   
    }
    return nuevo;    
 }
 let unificado= union(grupo5, grupo4);
 console.log(unificado); 
 
 function cuadrado(valor) {
     let cuadrado = 0;
     for (let i = 0; i<valor.length; i++) {
         cuadrado = valor[i]**2;
         console.log(`el cuadrado de ${unificado[i]}, es ${cuadrado}`);
     }
     return;
 }
 cuadrado(unificado);

