import React, { useState } from "react";
import Title from "./Title";

const Coaches = () => {
  const [coaches, setCoaches] = useState([
    {
      id: 1,
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-coaches-img1.jpg",
      title: "STEVEN AYOKEE",
      info: "OWNER/HEAD COACH",
      desc:
        "12 Years ago I lost 80lbs with the help of a personal coach and it completely changed my way of life. Since then, it’s been my mission to sway other people to do CrossFit.",
    },
    {
      id: 2,
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-coaches-img2.jpg",
      title: "JULIE COLLINS",
      info: "COACH",
      desc:
        "I initially took on CrossFit trainings after a spending a lifetime in professional athletics. The fact that I loved sports so much contributed a lot to my decision.",
    },
    {
      id: 3,
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-coaches-img3.jpg",
      title: "DOMINIC SNYDER",
      info: "COACH",
      desc:
        "Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury will serving in",
    },
    {
      id: 4,
      img:
        "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-coaches-img4.jpg",
      title: "VIRGIL COOK",
      info: "COACH",
      desc:
        "Virgil has been training amateur and professional combat athletes since 1995. His skill-set expands to the following combat styles: MMA fighting, Brazilian…",
    },
  ]);
  return (
    <section className="coaches">
      <Title title="coaches" />
      <div className="coaches__content">
        {coaches.map((coach) => {
          return (
            <div key={coach.id} className="coaches__content-item">
              <div className="coaches__content-item-img">
                <img src={coach.img} alt={coach.title} />
              </div>
              <div className="coaches__content-item-info">
                <h2 className="coaches__content-item-info-title">
                  {coach.title}
                </h2>
                <h3 className="coaches__content-item-info-details">
                  {coach.info}
                </h3>
                <p className="coaches__content-item-info-desc">{coach.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Coaches;
