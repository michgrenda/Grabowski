import React from "react";
// Carousel
import { Carousel as ModulesCarousel } from "react-responsive-carousel";

const Carousel = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="carousel-custom">
              <ModulesCarousel
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
              >
                <div style={{ padding: 20, height: 150, color: "white" }}>
                  1<p className="legend">Legend 1</p>
                </div>
                <div style={{ padding: 20, height: 150, color: "white" }}>
                  2<p className="legend">Legend 2</p>
                </div>
                <div style={{ padding: 20, height: 150, color: "white" }}>
                  3<p className="legend">Legend 3</p>
                </div>
              </ModulesCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
