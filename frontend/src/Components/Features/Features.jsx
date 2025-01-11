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
          Am_stock helps define your investment journey with the help of highly
          skilled mentors and investment tools. Investment is essential for
          everyone and will become a necessity in the future.
        </p>
      </div>
      <div className="feature-right">
        <FAQCard
          question="What is Am_Stock?"
          answer="Am_stock is a tool to help you manage investments with advanced analytics and personalized advice."
        />
        <FAQCard
          question="Is Am_Stock safe to use?"
          answer="Yes,  Am_Stock is designed with robust security measures to ensure your data and investments are safe."
        />
        <FAQCard
          question="Is  Am_Stock safe to use?"
          answer="Yes,  Am_Stock is designed with robust security measures to ensure your data and investments are safe."
        />
        <div className="highlight-card">
          <h3>Why choose Am_Stock over other platforms?</h3>
          <p>
            Am_stock can help you create an investment plan with guidance from
            skilled mentors and tools to match stocks with your goals. You can
            also use AI-powered tools to build a customized plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
