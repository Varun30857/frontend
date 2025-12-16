import { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { fetchProducts } from "./services/productService";

function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(() => setError("Failed to load products. Backend not running."));
  }, []);

  if (error) {
    return <p style={{ color: "red", padding: "20px" }}>{error}</p>;
  }

  return (
    <div className="products">
      {products.map((p) => (
        <div className="product-card" key={p._id}>
          <h2>{p.name}</h2>
          <p>₹{p.price}</p>

          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
