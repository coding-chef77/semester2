import { baseUrl } from "./setting/api.js";
import { displayMessage } from "./ui/displayMessage.js";

const container = document.querySelector(".featured-container");

const productUrl = baseUrl + "populate=image";

async function getProducts() {
  try {
    const response = await fetch(productUrl);
    const results = await response.json();

    const products = results.data;

    container.innerHTML = "";

    products.forEach((speaker) => {
      if (speaker.attributes.featured) {
        container.innerHTML += `
                              <div class="col-12 col-md-6 col-lg-4">   
                                <div class="card">                             
                                <img alt="picture related to product" class="card-img-top" src=${speaker.attributes.image.data[0].attributes.url}/>
                                <div class="card-body">
                                  <h5 class="card-title">${speaker.attributes.title}</h5>                                
                                  <p>$ ${speaker.attributes.price}</p>
                                  
                                  <a href="product-details.html?id=${speaker.attributes.id}" class="btn btn-primary">See more</a>
                                  
                                  </div>
                                </div>  
                              </div>
                              `;
      }
    });
  } catch (error) {
    container.innerHTML = displayMessage(
      "danger",
      "Ouf, something went wrong!"
    );
  }
}

getProducts();
