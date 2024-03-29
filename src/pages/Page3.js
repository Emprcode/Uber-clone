import React from "react";
import car from "../assets/car.png";
import {Container} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export const Page3 = () => {
  return (
    <div>
    <Container>
      <div
        className="mt-5 mb-5 d-flex justify-content-center align-items-center flex-wrap"
        data-aos="fade-up"
        data-aos-duration="1000">
        <div className="col-md-6 p-4">
          <div className="title mt-4">Rent a car</div>

          <p className="mt-5">
            Whether it's a holiday getaway, a day around town or a van to move
            house - find the right vehicle for you through our partners at
            Uber Carshare.
          </p>

          <div className="bottom-info curser">Learn more</div>
        </div>
        <div>
          <img src={car} alt="car" width="100%" />
        </div>
      </div>
    </Container>
  </div>
  );
};
