export function renderProducts(products) {
  const resultContainer = document.querySelector(".results");
<<<<<<< HEAD
  const imageUrl = "http://localhost:1337";
=======

  
>>>>>>> parent of 1684b47 (Change API)
  resultContainer.innerHTML = "";

  products.forEach(function (product) {
    resultContainer.innerHTML += `
                                  <div class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
<<<<<<< HEAD
                                    <img alt="picture related to product" class="card-img-top" src=${imageUrl}${product.attributes.image.data[0].attributes.url} width="200" />
                                    <div class="card-body">
                                      <h5 class="card-title">${product.attributes.title}</h5>
                                      <p>${product.attributes.description}</p>
=======
                                    <img alt="picture related to product" class="card-img-top" src=${product.attributes.image}/>
                                    <div class="card-body">
                                      <h5 class="card-title">${product.attributes.title}</h5>
                                      
>>>>>>> parent of 26e478b (Changed patways)
                                      <p>$ ${product.attributes.price}</p>
                                      <a href="product-details.html?id=${product.attributes.id}" class="btn btn-primary">See more</a>
                                      </div>
                                    </div>
                                  </div>
                                  `;
  });
}

