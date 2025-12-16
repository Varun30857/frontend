import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>{item.name} - ₹{item.price}</span>

          <button onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h2 className="total">Total: ₹{total}</h2>
      )}
    </div>
  );
}

export default Cart;
