let cart = [
    {id:1, productName:"Telefon",quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak",quantity:4, unitPrice:30},
    {id:3, productName:"Kalem",quantity:2, unitPrice:40},
    {id:4, productName:"Şarj Aleti",quantity:5, unitPrice:430},
    {id:5, productName:"Pot",quantity:1, unitPrice:400},
]

cart.map(product=>{
    console.log(product.productName + ":" + product.unitPrice *  product.quantity )
})

function addToCart(cart) {

    cart.push({id:6, productName:"Tv",quantity:1, unitPrice:6000})
}


let total = cart.reduce((acc,product)=>acc+ product.unitPrice,0)
console.log(total)

let quantityOver2 =  cart.filter(product => product.quantity>2)

console.log(quantityOver2)

addToCart(cart);

console.log(cart); //6 id'li product'ı da ekler.

let sayi = 10;

function sayiTopla(number){
    number+=1;
}

console.log(sayi); // Sayı değişmez 10 gelir.