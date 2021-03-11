import React, { useState } from "react";
import Title from "./Title";

const Programs = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "BASIC CROSSFIT",
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img1.jpg",
    },
    {
      id: 2,
      title: "FITNESS STUDIO",
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img2.jpg",
    },
    {
      id: 3,
      title: "YOGA CLASSES",
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img3.jpg",
    },
    {
      id: 4,
      title: "PERSONAL TRAINING",
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img4.jpg",
    },
  ]);
  return (
    <section className="programs">
      <Title title="our programs" />
      <div className="programs__content">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="programs__content-item"
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              <div className="program__title">
                <h2>{item.title}</h2>
              </div>
              <div className="btn__details">
                <button>PROGRAM DETAILS</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
