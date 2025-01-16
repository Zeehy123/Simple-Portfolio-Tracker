import React from "react";
import "./Testimonials.css";

const testimonial = [
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
    <section className="testimonials">
      <h2>Experience the power of dynamic portfolio tracking today</h2>
      <div className="testimonial-list">
        {testimonial.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <span className="testimonial-icon">{testimonial.icon}</span>
            <p>{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
