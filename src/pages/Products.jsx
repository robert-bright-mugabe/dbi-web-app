// src/pages/Products.jsx
import { ProductService } from "../services/ProductService";
import ProductCard from "../components/ProductCard";

function Products({ setCartCount }) {
  const productService = new ProductService();
  const products = productService.getProducts();

  return (
    <main>
      <section className="product-showcase" id="products">
        <h2>Our Eco-Friendly Products</h2>
        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setCartCount={setCartCount}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;