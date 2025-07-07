
import "./WhyChooseUs.css";
import dotsImage from "../../assets/dots-yellow.svg";
import whyChooseUs from "../../assets/why-choose-us-img.jpg";
import shipping from "../../assets/shopping-bag.png";
import customerSupport from "../../assets/customer-support.png";
import shop from "../../assets/delivery.png";
import ProductReturn from "../../assets/product-return.png";

const WhyChooseUs = () => {

  return (
    <section className="why-choose-section">
      <div className="why-choose-content">
        <div className="text-section">
          <h2>Why Choose Us</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <div className="features-grid">
            <div className="feature">
              <div className="icon-wrapper">
                <img src={shipping} className="icon" />
              </div>
              <div>
                <h4>Fast & Free Shipping</h4>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
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
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
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
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon-wrapper">
                <img src={ProductReturn} className="icon"/>
              </div>
              <div>
                <h4>Hassle Free Returns</h4>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="image-section">
          <img src={dotsImage} alt="Dots Background" className="dots-img" />
          <img src={whyChooseUs} alt="Room" className="main-img" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
