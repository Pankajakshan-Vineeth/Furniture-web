import "./CartFooter.css";
import product1 from "../../assets/Product-1.png";
import product2 from "../../assets/Product-2.png";
import { useState } from "react";

const CartFooter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => setCount1((prev) => prev + 1);
  const decrement1 = () => setCount1((prev) => Math.max(prev - 1, 0));

  const increment2 = () => setCount2((prev) => prev + 1);
  const decrement2 = () => setCount2((prev) => Math.max(prev - 1, 0));

  return (
    <div className="cart-footer-container">
      <div className="cart-table-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={product1} alt="Product 1" className="product-image" />
              </td>
              <td>Product 1</td>
              <td>$49.00</td>
              <td>
                <div className="quantity-control">
                  <button onClick={decrement1}>-</button>
                  <input type="text" value={count1} readOnly />
                  <button onClick={increment1}>+</button>
                </div>
              </td>
              <td>${(count1 * 49).toFixed(2)}</td>
              <td className="remove-btn">x</td>
            </tr>
\
            <tr>
              <td>
                <img src={product2} alt="Product 2" className="product-image" />
              </td>
              <td>Product 2</td>
              <td>$49.00</td>
              <td>
                <div className="quantity-control">
                  <button onClick={decrement2}>-</button>
                  <input type="text" value={count2} readOnly />
                  <button onClick={increment2}>+</button>
                </div>
              </td>
              <td>${(count2 * 49).toFixed(2)}</td>
              <td className="remove-btn">x</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="cart-summary-wrapper">
        <div className="left-section">
          <div className="top-buttons">
            <button className="black-button">Update Cart</button>
            <button className="black-button">Continue Shopping</button>
          </div>

          <div className="coupon-section">
            <h2>Coupon</h2>
            <p>Enter your coupon code if you have one.</p>
            <div className="coupon-input-wrapper">
              <input type="text" placeholder="Coupon Code" />
              <button className="black-button">Apply Coupon</button>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h2>CART TOTALS</h2>
          <div className="cart-total-line">
            <span>Subtotal</span>
            <span className="bold">
              ${(count1 * 49 + count2 * 49).toFixed(2)}
            </span>
          </div>
          <div className="cart-total-line">
            <span>Total</span>
            <span className="bold">
              ${(count1 * 49 + count2 * 49).toFixed(2)}
            </span>
          </div>
          <button className="black-button checkout-btn">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
