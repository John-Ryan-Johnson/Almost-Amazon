import utilities from '../helpers/utilities.js';

const cart = [];

const setCart = (book) => {
  cart.push(book);
}

const cartToDom = () => {
  let domString = '<h2>My Cart:</h2>';
  domString += '<div class="d-flex flex-wrap">';
  for(let i = 0; i < cart.length; i ++){
    domString += `<div class="card col-2 mx-auto mt-3">
    <img src=${cart[i].image} class="card-img-top mt-3" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cart[i].title}</h5>
      <p class="card-text">$${cart[i].price}</p>
    </div>
  </div>`
  }
  domString += '</div>';
  utilities.printToDom('cart-container', domString);
};



export default { setCart, cartToDom };