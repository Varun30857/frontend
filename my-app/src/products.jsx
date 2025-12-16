import { useContext } from "react";
import { CartContext } from "./CartContext";

import headphones from "./assets/images/headphones.jpg";
import watch from "./assets/images/watch.jpg";
import mouse from "./assets/images/mouse.jpg";

function Products() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Headphones", price: 1999, image: headphones },
    { id: 2, name: "Smart Watch", price: 2999, image: watch },
    { id: 3, name: "Wireless Mouse", price: 999, image: mouse },
  ];

  return (
    <div className="products">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <img src={p.image} alt={p.name} className="product-img" />
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
