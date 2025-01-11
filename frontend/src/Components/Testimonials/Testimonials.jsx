import React from "react";
import "./Testimonials.css";

const features = [
  {
    title: "Add, edit, and manage your stock holdings effortlessly.",
    icon: "📋",
  },
  {
    title: "Track your portfolio's real-time value dynamically",
    icon: "📊",
  },
  {
    title: "Gain insights with personalized dashboards and key metrics",
    icon: "💡",
  },
  {
    title: "Gain insights with personalized dashboards and key metrics",
    icon: "💡",
  },
];

const Testimonials = () => {
  return (
    <section className="features">
      <h2>Experience the power of dynamic portfolio tracking today</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <span className="feature-icon">{feature.icon}</span>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
