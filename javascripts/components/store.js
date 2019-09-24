const bookInfo = {
  title: 'My Book',
  price: '19.99',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Ia_urbUqW8fArIKsRqUQ9B8sVPZBbO0ISQuavN5ZgpGAIWaPGQ'
}




const printToDom = (divId, toPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = toPrint;
};

const addToCartEvent = () => {
  console.log('added to cart');
}


const makeStore = () => {
  let domString = '<h2>Our only book:</h2>';
  domString += '<p>Buy it now:</p>';
  domString += `<h3>$${bookInfo.price}</h3>`;
  domString += `<img src=${bookInfo.image} alt="book cover"/>`;
  domString += '<button id="cart-button" class="btn btn-danger col-12">Add to cart</button>';

  printToDom('store-container', domString);
  document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};



export default { makeStore };