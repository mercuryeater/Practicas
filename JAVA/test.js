// const recipe = {
//     name: "",
//     ingredients: [
//       { name: "Pan", quantity: 2 },
//       { name: "Jamón", quantity: 1 },
//       { name: "Queso", quantity: 1 },
//     ]
//   }

// console.log(recipe.ingredients[1].name);

function decode(str, obj) {
  let decodificado = "";
  let cadena = [];
  cadena = str.split("");
  for (key in obj) {
    for (i = 0; i < cadena.length; i++) {
      if (cadena[i] === key) {
        cadena[i] = obj[key];
      }
    }
    // console.log(cadena);
  }
  decodificado = cadena.join('');

  // comparar str con el obj
  // Si un elemento de la cadena es igual a una key se reemplaza
  return decodificado;
}

console.log(decode("h0l4", { "0": "o", "4": "a" })); // "hola"
console.log(decode("abc", { "a": "x", "b": "y", "c": "z" })); // "xyz"
