import { renderProducts } from "./renderProducts";

export function searchProducts(products) {
  searchBar.onkeyup = function (event) {
    
  const searchValue = event.target.value.trim().toLowerCase();
      

      const filteredProducts = products.filter(function (product) {
        if (product.attributes.title.toLowerCase().includes(searchValue) || (product.attributes.description.toLowerCase().includes(searchValue)))  {
          return true;
        }
      });
    renderProducts(filteredProducts);
  };
}