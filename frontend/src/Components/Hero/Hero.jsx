import React, { useEffect, useRef } from "react";
import "./Hero.css";
import heroImage from "../Assets/hero_section.png";
import { Link } from "react-router-dom";
const Hero = () => {
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    const image = imageRef.current;

    paragraph.style.opacity = 0;
    paragraph.style.transform = "translateY(50px)";
    const paragraphTimer = setTimeout(() => {
      paragraph.style.transition = "opacity 1s ease, transform 1s ease";
      paragraph.style.opacity = 1;
      paragraph.style.transform = "translateY(0)";
    }, 100);

    image.style.opacity = 0;
    image.style.transform = "translateY(50px)";
    const imageTimer = setTimeout(() => {
      image.style.transition = "opacity 1s ease, transform 1s ease";
      image.style.opacity = 1;
      image.style.transform = "translateY(0)";
    }, 200);

    return () => {
      clearTimeout(paragraphTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Track Your Stock In Real Time</h1>
        <p ref={paragraphRef}>
          Manage Your Portfolio With Ease And Track Your Stocks' Performance
          Dynamically
        </p>

        <Link to="/signup" className="cta-btn">
          Start Tracking Now
        </Link>
      </div>
      <div className="hero-image">
        <img ref={imageRef} src={heroImage} alt="Stock Tracking" />
      </div>
    </section>
  );
};

export default Hero;
