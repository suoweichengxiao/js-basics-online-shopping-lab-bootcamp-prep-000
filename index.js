var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
var itemPrice = getRandomValue(1, 100)
var toCart = {[item]: itemPrice}
cart.push(toCart);
console.log(`${item} has been added to your cart.`);
return cart;
}


  function viewCart() {
    if (cart.length === 0) {
      console.log(`Your shopping cart is empty.`);
      return cart
    }
    else {
      var itemsAndPrices = [];
    }
    for (let i = 0; i < cart.length; i++) {
      var items = Object.keys(cart[i]);
      var prices = cart[i][items]
      itemsAndPrices.push(`${items} at $${prices}`)
    }
    switch(cart.length) {
      case(1):
      console.log(`In your cart, you have ${itemsAndPrices}.`);
      break;
      case(2):
      console.log(`In your cart, you have ${itemsAndPrices[0]} and ${itemsAndPrices[1]}.`)
      break;
      default:
      console.log(`In your cart, you have ${itemsAndPrices.slice(0,-1).join(", ")}, and ${itemsAndPrices[itemsAndPrices.length-1]}.`);


    }
      return cart;
  }




function total() {
    var priceArray = [];
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    var prices = cart[i][item];
    priceArray.push(prices);
  }
  var sum = 0;
  for (var i = 0; i < priceArray.length; i++) {var total = sum += priceArray[i]};
  return total;

  }


  // write your code here


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item) === true) {
    cart.splice(i, 1);
    return cart
  } else {
  }
}
console.log(`That item is not in your cart.`)
return cart
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card number on file for you.`);
  }
  else {
    console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;

  }
}
