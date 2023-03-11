import { baseUrl } from "./setting/api.js";
import { displayMessage } from "./ui/displayMessage.js"; 

const container = document.querySelector(".featured-container");
const heroContainer = document.querySelector(".hero-image");

<<<<<<< HEAD
<<<<<<< HEAD
const productUrl = baseUrl + "?populate=image";
const imageUrl = "http://localhost:1337";
const heroUrl = "http://localhost:1337/api/landing-page-image?populate=*";
=======
const productUrl = baseUrl + "populate=image";
>>>>>>> parent of 26e478b (Changed patways)
=======
const productUrl = baseUrl + "products?populate=image";
>>>>>>> parent of 1684b47 (Change API)

async function getProducts() {
  try {
    const response = await fetch(heroUrl);
    const result = await response.json();
    const hero = result.data;
    console.log(hero);

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
<<<<<<< HEAD
      if (speaker.attributes.producyOfWeek) {
=======
      if (speaker.attributes.featured) {
>>>>>>> parent of 26e478b (Changed patways)
        container.innerHTML += `
                              <div class="col-12 col-md-6 col-lg-4">   
                                <div class="card">                             
<<<<<<< HEAD
                                <img alt="picture related to product" class="card-img-top" src=${imageUrl}${speaker.attributes.image.data[0].attributes.url} width="200" />
=======
                                <img alt="picture related to product" class="card-img-top" ${speaker.attributes.image.data[0].attributes.url}/>
>>>>>>> parent of 1684b47 (Change API)
                                <div class="card-body">
<<<<<<< HEAD
                                  <h5 class="card-title">${speaker.attributes.title}</h5>   
                                  <p>${speaker.attributes.description}</p>                             
=======
                                  <h5 class="card-title">${speaker.attributes.title}</h5>                                
>>>>>>> parent of 26e478b (Changed patways)
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
} }

getProducts();