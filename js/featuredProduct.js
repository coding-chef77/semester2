import { baseUrl } from "./setting/api.js";
import { displayMessage } from "./ui/displayMessage.js";

const container = document.querySelector(".featured-container");
const heroContainer = document.querySelector(".hero-image");

const productUrl = baseUrl + "?populate=image";

const imageUrl = "http://localhost:1337";
const heroUrl = "http://localhost:1337/api/landing-page-image?populate=*";

async function getProducts() {
  try {
    const heroResponse = await fetch(heroUrl);
    const heroResult = await heroResponse.json();
    const hero = heroResult.data;

    heroContainer.innerHTML = `
      <div class="hero-image"
        style="background-image: url(${imageUrl}${hero.attributes.frontImage.data.attributes.url})"
      ></div>
    `;
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await fetch(productUrl);
    const results = await response.json();

    const products = results.data;

    container.innerHTML = "";

    products.forEach((speaker) => {
      if (speaker.attributes.producyOfWeek) {
        container.innerHTML += `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img alt="picture related to product" class="card-img-top" src="${imageUrl}${speaker.attributes.image.data[0].attributes.url}" width="200" />
              <div class="card-body">
                <h5 class="card-title">${speaker.attributes.title}</h5>
                <p>${speaker.attributes.description}</p>
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
      "Oops, something went wrong!"
    );
  }
}

getProducts();
