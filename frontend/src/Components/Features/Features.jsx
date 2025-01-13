import React, { useState, useRef, useEffect } from "react";
import "./Features.css";
import FeatureImage from "../Assets/feature_image.avif";

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-card">
      <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>➔</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const Features = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="feature-section">
      <div className="feature-left">
        <img
          src={FeatureImage}
          alt="Investment Tools"
          ref={imageRef}
          className={`feature-image ${isVisible ? "bounce" : ""}`}
        />
        <h2>Your Roadmap to Achieve Financial Freedom</h2>
        <p>
          Am_stock empowers your stock investment journey with the guidance of
          highly skilled mentors and advanced stock management tools. Investing
          in stocks is a crucial step towards financial growth and is set to
          become indispensable in the future.
        </p>
      </div>
      <div className="feature-right">
        <FAQCard
          question="What is Am_Stock?"
          answer="Am_stock is a tool to help you manage investments with advanced analytics and personalized advice."
        />
        <FAQCard
          question="Is Am_Stock safe to use?"
          answer="Yes,  am_stocks have provided higher returns compared to other investment options like bonds or savings accounts."
        />
        <FAQCard
          question="Is  Am_Stock safe to use?"
          answer="Yes, Stocks are easy to buy and sell, offering flexibility if you need to access your money."
        />
        <div className="highlight-card">
          <h3>Why choose Am_Stock over other platforms?</h3>
          <p>
            Unlike many other platforms that prioritize transactions, am_stock
            focuses on empowering users with education, insights, and
            mentorship. It’s not just about buying and selling stocks—it’s about
            building a personalized investment journey that aligns with your
            goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
