import { baseUrl } from "./setting/api.js";
import { displayMessage } from "./ui/displayMessage.js";

const productDetails = document.querySelector(".product-details");
const title = document.querySelector(".new-title");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const imageUrl = "http://localhost:1337";
const url = `${baseUrl}/${id}?populate=image`;

async function getproductDetails() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const product = result.data;

    createHtml(product);
  } catch (error) {
    productDetails.innerHTML = displayMessage(
      "danger",
      "Oops, something went wrong!"
    );
  }
}
getproductDetails();

function createHtml(product) {
  productDetails.innerHTML = ` 
    <div class="col-12 col-md-6 col-lg-4 mx-auto">
      <div class="card">
        <img alt="picture related to product" class="card-img-top" src="${imageUrl}${product.attributes.image.data[0].attributes.url}"/>
        <div class="card-body">
          <h5 class="card-title">${product.attributes.title}</h5>
          <p class="card-text">${product.attributes.description}</p>
          <p>$ ${product.attributes.price}</p>
          <a class="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>`;
  title.innerHTML = `${product.attributes.title}`;

  const cart = productDetails.querySelector(".btn-primary");

  cart.addEventListener("click", () => {
    addTooCart();
  });

  function addTooCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let itemExists = cartItems.some((item) => item.id === product.id);
    if (!itemExists) {
      cartItems.push({
        id: product.id,
        title: product.attributes.title,
        price: product.attributes.price,
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert(`${product.attributes.title} added to cart`);
    } else {
      alert(`${product.attributes.title} is already in the cart`);
    }
  }
}
