import  './product.css'
import product1 from '../../assets/product-1.png'
import product2 from '../../assets/product-2.png'
import product3 from '../../assets/product-3.png'

const products = [
  {
    name: "Nordic Chair",
    price: "$50.00",
    image: product1,
  },
  {
    name: "Kruzo Aero Chair",
    price: "$78.00",
    image: product2,
  },
  {
    name: "Ergonomic Chair",
    price: "$43.00",
    image: product3,
  },
];

const Products = () => {
  
  return (
    <section className="crafted-section">
      <div className="crafted-content">
        <h1>
          Crafted with<br />excellent<br />material.
        </h1>
        <p>
          Donec vitae odio quis nisl dapibus<br/> malesuada.
          Nullam ac aliquet velit.<br />
          Aliquam vulputate velit imperdiet dolor<br/> tempor tristique.
        </p>
        <button>Explore</button>
      </div>
      <div className="crafted-products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Products;
