import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's get in touch and build something great!
      </p>
      <Link to="/contact" className=" btn">
        Contact Me!
      </Link>
    </section>
  );
};

export default CTA;
