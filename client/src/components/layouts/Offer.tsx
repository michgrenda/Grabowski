import React from "react";
import { Link } from "react-router-dom";

const Offer: React.FC = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="row">
          <div className="col-12">tekst</div>
          <div className="col-12">
            <Link to="/gallery">galeria</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
