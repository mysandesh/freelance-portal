import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
