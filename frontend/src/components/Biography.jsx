import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At MedSync Institute, we are committed to redefining healthcare
            through a blend of advanced technology and compassionate care. Our
            facility stands at the forefront of medical innovation, equipped
            with state-of-the-art resources that enhance the patient experience.
            Our skilled professionals work collaboratively to ensure that every
            patient feels heard and valued.
          </p>
          <p>
            <strong><em>Compassionate care meets cutting-edge technology.</em></strong>
          </p>
          <p>
            At MedSync, we strive to create a supportive environment where
            patients can thrive, empowering them with the knowledge and tools
            needed to make informed decisions about their health. Your health is
            our mission, guiding you toward a brighter, healthier future.
          </p>
          <p>
            We are deeply grateful for the trust you place in us as your
            healthcare partner!
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
