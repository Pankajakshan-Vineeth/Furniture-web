import "./Support.css";
import shipping from "../../assets/shopping-bag.png";
import customerSupport from "../../assets/customer-support.png";
import shop from "../../assets/delivery.png";
import ProductReturn from "../../assets/product-return.png";

const Support = () => {
  return (
    <div className="support-container">
      <div className="features-grid">
        <div className="feature">
          <div className="icon-wrapper">
            <img src={shipping} className="icon" />
          </div>
          <div>
            <h4>Fast & Free Shipping</h4>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <img src={shop} className="icon" />
          </div>
          <div>
            <h4>Easy to Shop</h4>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <img src={customerSupport} className="icon" />
          </div>
          <div>
            <h4>24/7 Support</h4>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <img src={ProductReturn} className="icon" />
          </div>
          <div>
            <h4>Hassle Free Returns</h4>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
      </div>
      <div className="features-grid">
        <div className="feature">
          <div className="icon-wrapper">
            <img src={shipping} className="icon" />
          </div>
          <div>
            <h4>Fast & Free Shipping</h4>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <img src={shop} className="icon" />
          </div>
          <div>
            <h4>Easy to Shop</h4>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <img src={customerSupport} className="icon" />
          </div>
          <div>
            <h4>24/7 Support</h4>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <img src={ProductReturn} className="icon" />
          </div>
          <div>
            <h4>Hassle Free Returns</h4>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
