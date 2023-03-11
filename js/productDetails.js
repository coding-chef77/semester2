import { baseUrl } from "./setting/api.js";
import { displayMessage } from "./ui/displayMessage.js";

const productDetails = document.querySelector(".product-details");
const title = document.querySelector(".new-title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("_id");

if (!id) {
  document.location.href = "products.html";
}

const url = baseUrl + "?populate=image/" + id;

async function getproductDetails() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    const products = results.data;
    createHtml(products);
  } catch (error) {
    productDetails.innerHTML = displayMessage(
      "danger",
      "Ouf, something went wrong!"
    );
  }
}
getproductDetails();

function createHtml(product) {
  productDetails.innerHTML = ` 
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
    <img alt="picture related to product" class="card-img-top" ${product.attributes.image}/>
    <div class="card-body">
      <h5 class="card-title">${product.attributes.title}</h5>
      <p class="card-text">${product.attributes.description}</p>
      <p>$ ${product.attributes.price}</p>
      <a href="products.html" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>`;
  title.innerHTML = `${product.attributes.title}`;
}
