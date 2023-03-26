import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Add;
