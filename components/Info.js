import React from "react";
import { FaSistrix, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const Info = () => {
  return (
    <div className="info">
      <div className="container">
        <div className="info__content">
          <ul>
            <li>
              <FaPhoneAlt className="info__icon" />
              1-555-644-5566
            </li>
            <li>
              <FaMapMarkerAlt className="info__icon" />
              Studio City, CA 91604
            </li>
          </ul>
          <div className="search">
            <FaSistrix className="search__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
