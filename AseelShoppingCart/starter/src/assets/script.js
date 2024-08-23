/* create :
1. array for products objects.\
2. cart array to contain the selected products.
3. totalPaid variable to holds the multiple payment attempts
*/
let products = [];
const cart = [];
let totalPaid = 0;

/* 
Thank you so much to all the reviewers who have reviewed our projects 
over the last 4 months. I am grateful.
please don't consider this comment as a redundant code :) 
*/

/* creating the objects*/
const firstProduct = createObject("Blusher", 40, 0, 1, "https://glossier-uk.imgix.net//files/glossier-cloudpaint-puff-1.png?auto=compress,format&cs=srgb&w=1832");
const secondProduct = createObject("Eye liner", 55, 0, 2, "https://images.beautybay.com/eoaaqxyywn6o/296Foc36HeOZKVIDE13ZXA/eea21d67ad0d89f0cb7d054bf977d082/ANAS0440F_1.jpg");
const thirdProduct = createObject("Lip gloss", 20, 0, 3, "https://lh3.googleusercontent.com/proxy/BPOPaZM9bJ5lRCiFxhf_BQ6Ka43Dsz-nWAI23EKnEtcPzxrsZRKitLBGdW2jS-8xhIdRUSOGpv9VBemL-syQUkrcfMD4I2abSVIJmSRG6HRdZP5XpW0OWxDeEM3dJTnNFS_DrX3qB8sj-CTyqsN2iZw");
const fourthProduct = createObject("Lipstick", 75, 0, 4, "https://lh6.googleusercontent.com/proxy/X9yFp8BVysPa9gMe_Te2rrjvxYaPrTeGsNjSIdhyDl_ynPBNugaqe0S8kX_MO0DdU4COg59IwszOGbQJqpJp_ZgBfBEhdBXx1XlDRQA_oZORD5SQVZnIKlvUhA9ijvZrh4oaJB-qfBCxEu5_qI7eqsE-LD1vLZlfVL9fqoax6az0dN6bD5_9iZNRfIyzQabR_vxHTso");
const fifthProduct = createObject("Brow gel", 15, 0, 5, "https://contenthub-delivery.mecca.com/api/public/content/I-038334-I-038334-M1-AnastasiaBeverlyHills-DipbrowGel.webp");
const sixthProduct = createObject("Mascara", 30, 0, 6, "https://www.jonesroadbeauty.com/cdn/shop/products/JonesRoad_Mascara_main.jpg?v=1603583529&width=1000");

/* I use the destructuring and the spread operator to add the objects to 
products array instead of adding each object independently*/
products = [...products, firstProduct, secondProduct, thirdProduct, fourthProduct, fifthProduct, sixthProduct];

/* a simple function that return a product object when we calling it */
function createObject(name, price, quantity, productId, image) {
  return {
    name,
    price,
    quantity,
    productId,
    image
  }
}


/* a function add the product to the car if it's not exist yet or
 increase its quantity if its already exits.*/
function addProductToCart(productId) {
  for (let product of products) {
    if (product.productId === productId) {
      let cartProduct = cart.find(product => product.productId === productId);
      if (cartProduct) {
        increaseQuantity(productId);
      } else {
        product.quantity += 1;
        cart.push(product);
      }
      return;
    }
  }
}

/*increase the quantity of a certain product in the cart */
function increaseQuantity(productId) {
  let product = products.find(product => product.productId === productId);
  if (product) {
    product.quantity += 1;
  }
}

/*decrease the quantity of a certain product in the cart and remove the product 
//from the cart if quantity is 0 */
function decreaseQuantity(productId) {
  let product = products.find(product => product.productId === productId);
  if (product) {
    product.quantity -= 1;
    if (product.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

/*remove a product from the cart regardless of its quantity*/
function removeProductFromCart(productId) {
  let product = products.find(product => product.productId === productId);
  if (product.productId === productId) {
    product.quantity = 0;
    cart.splice(cart.indexOf(product), 1);
  }
}

/*function to calculate the total amount of all products in the cart
by multiply the product quantity with its price*/
function cartTotal() {
  let totalCost = 0;
  for (let product of cart) {
    totalCost += (product.price * product.quantity);
  }
  return totalCost;
}

/*  a function that empties the products from the cart */
function emptyCart() {
  if (cart.length !== 0) {
    cart.splice(0, cart.length);
  }
}

function pay(amount) {
  totalPaid += amount;
  let totalPrice = cartTotal();
  let remaining = totalPaid - totalPrice;
  totalPaid = 0;
  return remaining;
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
