let persona = {
    nombre: "Germán",
    apellido: "Escobar",
    edad: 35,
    estatura: 1.8,
    sayHi: function() {
      console.log("Hola :)");
    }
  }


for (let llave in persona) {
    if (persona.hasOwnProperty(llave)) {
      console.log(persona[llave])
    }
  }


// let llaves = Object.keys(persona);

// for (let i=0; i < llaves.length; i++) {
//   let valor = llaves[i];
//   console.log(llaves[i] + " : " + persona[valor]);
// }


  //let llave = "edad";
//console.log(persona[llave]);

// METODOS, llamndo a la funcion

//persona.sayHi();