/* 

console.log("Hola Mundo"); 

//Comentario de 1 sola linea
/*
Este
Es
Un
Comentario
De
Varias
Lineas


console.log("Esto está muy bacano");

//Probando la combinacion de comillas
console.log('Y \'él dijo\': "Hola mundo"');

console.log("Hola " + "Mundo " + "Cómo " + "Estás");

//ahora numeros
console.log(1 + 2)
console.log(3 * 4 + 5)
console.log(3 * (4 + 5))
console.log(8 / 2)

*/


//VARIABLES:

/*
let name = "Federico";
console.log("Hola " + name);


let side = 10;

console.log("El perímetro de un cuadrado de lado " + side + " es " + (side * 4));
console.log("El área de un cuadrado de lado " + side + " es " + (side * side));

*/

//CONDICIONALES
/*
if (true) {
    console.log("Hola Mundo");
  }


  let num = 18;

  if (num < 10) {
    console.log("El número es menor a 10");
  } else {
    console.log("El número es igual o mayor a 10");
  }




        //CONDICION ANIDADA

  let num = 8;

if (num < 10) {
  console.log("El número es menor a 10");
} else {
  if (num > 10) {
    console.log("El número es mayor a 10");
  } else {
    console.log("El número es igual a 10");
  }
}
  

    //ELSE IF

let num = 12;

if (num < 10) {
  console.log("El número es menor a 10");
} else if (num > 10) {
  console.log("El número es mayor a 10");
} else {
  console.log("El número es igual a 10");
}



//OPERADOR TERNARIO

let num = 15;

num >= 15 ? console.log('Es mayor o igual que 15') : console.log('Es menor que 15');\


//CICLOS

let i = 0;
while (i < 850) {
    console.log(i +" Hola mundo");
    i++
}

//Ciclo infinito:
while (true) {
    console.log("Hola ")
}



// EL FOR

for (let i = 0; i < 850; i ++) {
    console.log(i + " Hola mundo");
  }

for (let i =100; i >0; i--) {
    console.log(i);
}


// FUNCIONES

function hello() {
  console.log("Hola mundo");
}

hello();

function sum(numberOne, numberTwo) {
  let result = 0;
  result = numberOne + numberTwo;
  console.log(result);
  return result
  }
sum(1,3);



// Retornando un valor


function hello(name) {
  return "Hola " + name;
}

var g1 = hello("Germán");// podemos asignar el valor de retorno a una variable

console.log(g1);

// podemos llamar la función directamente en el parámetro de otra función.
console.log(hello("David"));



// ARREGLOS

let array = [1, "Pedro", true, false, "Juan"];
//recorriendolo
for (let i = 0; i < array.length; i ++) {
  console.log(array[i]);
}



let array = [1, "Pedro", true, false, "Juan"];

console.log("Antes del reemplazo el elemento es " + array[1]);
//reemplazar un elemento:
array[1] = "Germán";

console.log("Luego del reemplazo el elemento es " + array[1]);

array[array.length - 1] = "Carlos";

console.log(array[array.length-1]);



//Agregar uno o más elementos con push:

let myArray = ['uno', 'dos'];
console.log("Antes del push es: " + myArray);
myArray.push('tres', 'cuatro', 'cinco');
console.log(myArray); // ["uno", "dos", "tres", "cuatro", "cinco"]

*/

// Metodo splice:

//Agrega elementos
let array = ["Pedro", "Germán", "Diana"];
array.splice(0, 0, "Juan", 1, "Daniel" );// ["Juan", "Pedro", "Germán", "Diana"]
console.log(array);

// Eliminar elementos de un array
let fruits = ['manzana', 'banana', 'naranja', 'mango'];
fruits.splice(2, 1); // Elimina 1 elemento a partir del índice 2
console.log(fruits); // ["manzana", "banana", "mango"]

// Agregar elementos a un array
let animals = ['perro', 'gato', 'ratón'];
animals.splice(1, 0, 'conejo', 'loro'); // Agrega 'conejo' y 'loro' a partir del índice 1
console.log(animals); // ["perro", "conejo", "loro", "gato", "ratón"]

// Reemplazar elementos de un array
let colors = ['rojo', 'verde', 'azul'];
colors.splice(1, 2, 'amarillo', 'naranja'); // Elimina 'verde' y 'azul', y agrega 'amarillo' y 'naranja' a partir del índice 1
console.log(colors); // ["rojo", "amarillo", "naranja"]