export function renderProducts(products) {
  const resultContainer = document.querySelector(".results");
  const imageUrl = "http://localhost:1337";
  resultContainer.innerHTML = "";

  products.forEach(function (product) {
    resultContainer.innerHTML += `
                                  <div class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
                                    <img alt="picture related to product" class="card-img-top" src=${imageUrl}${product.attributes.image.data[0].attributes.url} width="200" />
                                    <div class="card-body">
                                      <h5 class="card-title">${product.attributes.title}</h5>
                                      <p>${product.attributes.description}</p>
                                      <p>$ ${product.attributes.price}</p>
                                      <a href="product-details.html?id=${product.attributes.id}" class="btn btn-primary">See more</a>
                                      </div>
                                    </div>
                                  </div>
                                  `;
  });
}
