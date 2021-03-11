import React from "react";
import Title from "./Title";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <Title title="TESTIMONIAL" />
      <div className="testimonials__content">
        <div className="container">
          <div className="testimonials__content-info">
            <p className="testimonials__content-info-desc">
              <FaQuoteLeft className="icon" />
              IronMass CrossFit Studio had me at a first fitness workout. It’s a
              truly inspiring team of fitness professionals. They are able to
              spread the love for what they teach to everyone. Their abilities &
              enthusiasm are just overwhelming!
            </p>
            <h3 className="testimonials__content-info-name">SARAH O'MALLEY</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
