//import { cart as myCart} from '../data/cart.js';// ndryshon emrin

import { cart, addToCart } from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
    <div class="product-image-container">
      <img
        class="product-image"
        src="${product.image}"
      />
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img
        class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png"
      />
      <div class="product-rating-count link-primary">${product.rating.count}</div>
    </div>

    <div class="product-price">$${formatCurrency(product.priceCents)}</div>

    <div class="product-quantity-container">
      <select id='selekti'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png" />
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id="${product.id}" 
    >Add to Cart
    </button>
  </div>
    `;
}); // mbarimi i funksionit per te nxjerr tgjitha produktet ne wall

  // te gjitha produktet ne wall
  document.querySelector('.js-products-grid').
  innerHTML = productsHTML;

  const select = document.getElementById("selekti");
console.log("ky eshte select", select);
select.addEventListener("change", function() {
  let selectedValue = document.querySelectorAll("option");
  console.log("ky eshte selekt value", selectedValue);
  // const selectedValue = select.options[select.selectedIndex].value;
})

  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
});

document.querySelector('.js-cart-quantity').
innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
 .forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    
    addToCart(productId);
    updateCartQuantity();
  });
});
