function getCartItems() {
  let cartItems = localStorage.getItem("cartItems");

  if (cartItems) {
    cartItems = JSON.parse(cartItems);

    displayCartItems(cartItems);
  } else {
    displayMessage("info", "Your cart is empty");
  }
}

getCartItems();

function displayCartItems(cartItems) {
  const cartContainer = document.querySelector(".cart-container");

  cartContainer.innerHTML = `
    <div class="cart-container bg-white">
      <h2>Your Cart:</h2>
    </div>
  `;

  cartItems.forEach((item) => {
    const itemHtml = `
    <div class="cart-container bg-white">
      <div class="cart-item row" data-id="${item.id}">
          <div class="col-12 col-md-3">   
            </div>
              <div class="col-12 col-md-6">
                <h4 class="cart-item-title">${item.title}</h4>
              </div>
            <div class="col-12 col-md-3">
            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            <button class="btn btn-danger cart-item-remove">Remove</button>
          </div>
        </div>
      </div>
    `;
    cartContainer.insertAdjacentHTML("beforeend", itemHtml);
  });
}

const cartContainer = document.querySelector(".cart-container");

cartContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-item-remove")) {
    const cartItem = event.target.closest(".cart-item");
    const itemId = cartItem.dataset.id;

    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    cartItems = cartItems.filter((item) => item.id !== itemId);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    displayCartItems(cartItems);
  }
});
