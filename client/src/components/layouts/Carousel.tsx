import React from "react";
// Carousel
import { Carousel as ModuleCarousel } from "react-responsive-carousel";

const Carousel: React.FC<{ images: string[] }> = (props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="carousel-custom">
              <ModuleCarousel
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                className="carousel-custom__module-carousel"
              >
                {props.images.map((image, index) => (
                  <div>
                    <img src={image} alt={`${index}`} />
                  </div>
                ))}
              </ModuleCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
