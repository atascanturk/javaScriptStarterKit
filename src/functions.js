function addToCart(quantity, productName = "Elma") {
  console.log("Sepete eklendi :" + productName + "adet : " + quantity);
}

addToCart("elma");

let sayHello = () => {
  console.log("Hello World!");
};

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };
function addToCart2(product) {
  console.log("Ürün : " + product.productName);
  console.log("Adet : " + product.quantity);
  console.log("Fiyat : " + product.unitPrice);
}

addToCart2(product1);

function addToCart3(products) {
  console.log(products);
}

function addToCart4(x) {
  console.log(products);
}

let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 10, quantity: 5 },
  { productName: "Karpuz", unitPrice: 10, quantity: 5 },
];

//addToCart3 ve addToCart4 aynı sonucu verir.
addToCart3(products);
addToCart4(products); // products'ı kendi scopeu içinde bulamadığı için bir üst scope'a bakar.

function add(...numbers) {
  // rest operatoru -- kapsulleme yapar
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

let total = 0;

function add2(...numbers) {
  // rest operatoru -- kapsulleme yapar
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total)
}

add(10, 20); // out -> [10,20]
add(10, 20, 30); // out -> [10,20,30]

add2(10,20) // out -> 30

let numbers = [10,20,30,40,50]
console.log(Math.max(...numbers))
//destructoring
let [marmara,ege, [egeSehirleri]] = ["Marmara", {name : "Ege" , population : "25M"},[ ["İzmir", "Bergama"], ["İzmir", "Bornova"]]]

console.log(ege.name)
console.log(ege.population)
console.log(egeSehirleri)

let newProductName , newUnitPrice , newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = {productName:"Elma",unitPrice:10,quantity:20})

console.log(newProductName);