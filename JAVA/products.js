
// //ARREGLO DE OBJETOS

// let products = [
//     { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//     { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//     { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
//   ];    

//   for (let i=0; i < products.length; i++) {
//     let product = products[i];
//     console.log(product.name);
//     console.log("  Id: " + product.id);
//     console.log("  Precio: " + product.price);
//     console.log("  Categorías: " + product.categories.join(", "));
//   }

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

