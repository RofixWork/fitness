import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
const Team = () => {
  const [team, setTeam] = useState([
    {
      id: 1,
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/latest_photos_img_3.jpg",
    },
    {
      id: 2,
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/latest_photos_img_2.jpg",
    },
    {
      id: 3,
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img3.jpg",
    },
    {
      id: 4,
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-coaches-img1.jpg",
    },
  ]);
  return (
    <div className="team">
      <div className="container">
        <div className="team__content">
          {team.map((item) => {
            return (
              <div key={item.id} className="team__content-item">
                <img src={item.img} alt="" />
                <div className="overlay">
                  <FaInstagram className="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
