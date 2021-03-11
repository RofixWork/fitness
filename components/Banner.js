import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__title">
          <h2>WELCOME TO</h2>
          <h1>
            <span>IRON</span>MASS
          </h1>
          <h2>CROSSFIT STUDIO</h2>
        </div>
        <p className="banner__desc">
          Since our opening day back in 2013, our Gym classes have provided an
          inspiring welcoming for everybody! That makes every attendee feel like
          they are a part of one big and passionate community! With that in
          mind, you can always reach our fitness instructors for any kind of
          assistance. Their ultimate goal is to make you as fit and strong as
          only possible.
        </p>
        <button className="banner__btn">get started today</button>
      </div>
    </div>
  );
};

export default Banner;
