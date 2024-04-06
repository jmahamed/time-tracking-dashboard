import React from "react";

const Card = ({
  imageUrl,
  title,
  presentHours,
  lastHours,
  backgroundColor,
}) => {
  return (
    <div className="card">
      <div className="card-image" style={{ background: backgroundColor }}>
        <img src={imageUrl} alt="icon" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <p className="card-subtitle">{title}</p>
          <img src="/elipses.png" alt="elipses" />
        </div>
        <div className="card-hrs">
          <span className="card-present">{presentHours}</span>
          <span className="card-last">{lastHours}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
