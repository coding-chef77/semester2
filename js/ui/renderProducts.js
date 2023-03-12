export function renderProducts(products) {
  const resultContainer = document.querySelector(".results");
  const imageUrl = "http://localhost:1337";
  resultContainer.innerHTML = "";

  products.forEach(function (product) {
    resultContainer.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
      <img class="card-img-top" src="${imageUrl}${product.attributes.image.data[0].attributes.url}" alt="Product image">
      <div class="card-body">
        <h5 class="card-title">${product.attributes.title}</h5>
        <p class="card-text">${product.attributes.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <p class="card-price">$${product.attributes.price}</p>
          <a href="product-details.html?id=${product.attributes.id}" class="btn btn-primary">See more</a>
        </div>
      </div>
    </div>
  </div>
  
                                  `;
  });
}
