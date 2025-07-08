import { useState } from "react";
import "./Testimonials.css";
import person1 from "../../assets/person-1.jpg";

const testimonials = [
  {
    text: `Donec facilisis quam ut purus rutrum lobortis. 
           Donec vitae odio quis nisl dapibus malesuada. 
           Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
           Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
           Integer convallis volutpat dui quis scelerisque.`,
    name: "Maria Jones",
    role: "CEO, Co-Founder, XYZ Inc.",
    image: person1,
  },
  {
    text: `Donec facilisis quam ut purus rutrum lobortis. 
           Donec vitae odio quis nisl dapibus malesuada. 
           Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
            et malesuada fames ac turpis egestas. 
           Integer convallis volutpat dui quis scelerisque.`,
    name: "Maria Jones",
    role: "CEO, Co-Founder, XYZ Inc.",
    image: person1,
  },
  {
    text: `Donec facilisis quam ut purus rutrum lobortis. 
           Donec vitae odio quis nisl dapibus malesuada. 
           Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
          .`,
    name: "Maria Jones",
    role: "CEO, Co-Founder, XYZ Inc.",
    image: person1,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrenIndex] = useState(0);

  const handlePrev = () => {
    setCurrenIndex((previousIndex) =>
      previousIndex === 0 ? testimonials.length - 1 : previousIndex - 1
    );
  };

  const handleNext = () => {
    setCurrenIndex((previousIndex) =>
      previousIndex === testimonials.length - 1 ? 0 : previousIndex + 1
    );
  };
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonials</h2>

      <div className="slider-wrapper">
        <div
          className="testimonial-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div className="testimonial-slide" key={index}>
              <p className="testimonial-text">“{item.text}”</p>
              <div className="testimonial-user">
                <img src={item.image} className="testimonial-avatar" />
                <h4>{item.name}</h4>
                <p className="testimonial-role">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-controls">
        <button onClick={handlePrev} className="nav-button">
          &lt;
        </button>
        <button onClick={handleNext} className="nav-button">
          &gt;
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
