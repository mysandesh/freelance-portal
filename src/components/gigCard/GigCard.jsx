import React from "react";
import "./GigCard.scss";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="gigCard">
        <div className="gigCard">
          <img src="{item.img}" alt="" />
          <div className="info">
            <div className="user">
              <img src="{item.pp}" alt="" />
              <span>{item.username}</span>
            </div>
          </div>
          <div className="details"></div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
