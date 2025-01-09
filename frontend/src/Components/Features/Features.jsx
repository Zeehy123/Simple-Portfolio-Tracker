import React, { useEffect, useRef, useState } from "react";
import "./Features.css";
import FeatureImage from "../Assets/feature_image.avif";

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
    <div className="feature-section">
      <div className="feature-left">
        <img
          src={FeatureImage}
          alt="Feature"
          ref={imageRef}
          className={`feature-image ${isVisible ? "bounce" : ""}`}
        />
        <h2>Your Roadmap to Achieve the Bright Future Financial Freedom</h2>
        <p>
          Invezt helps define your investment journey with the help of highly
          skilled mentors and investment robots. Investment is needed by
          everyone, and in the future, it will become a necessity for everyone.
        </p>
      </div>
      <div className="feature-right">
        <div className="faq-card">
          <div className="faq-header">
            <h3>What is Invezt?</h3>
            <span className="arrow">&#9656;</span>
          </div>
          <div className="faq-answer">Invezt is a platform...</div>
        </div>
        <div className="faq-card">
          <div className="faq-header">
            <h3>Is Invezt safe to use?</h3>
            <span className="arrow">&#9656;</span>
          </div>
          <div className="faq-answer">Yes, Invezt ensures...</div>
        </div>
        <div className="highlight-card">
          <h3>Why choose Invezt over other platforms?</h3>
          <p>
            Invezt can help you give advice to your investment plan. Give you a
            mentor with highly skilled and match stocks to your plan. Another
            way, you can use robot invest to create your plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
