const cart = [
    {name: "widget", price: 9.95},
    {name: "gadget", price: 22.95}
];

const names = cart.map(x=>x.name);
const prices = cart.map(x=>x.price);
const discountPrices = prices.map(x=>x*0.8);

console.log(names, prices, discountPrices);

