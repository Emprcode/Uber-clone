import React from "react";
import { Button, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export const Hero1 = () => {
  return (
    <div className="city" data-aos="fade-up" data-aos-duration="1000">
      <Container>
        <div className="p-5">
          <div>
            <h1 className="fw-bold mt-5">
              The Uber you know, reimagined for business
            </h1>

            <p className="mt-5">
              A platform for managing global rides and meals, and local
              deliveries, for companies of any size.
            </p>
          </div>
          <Button variant="dark" className="mt-3 p-3 fw-bold ">
            Get started
          </Button>
        </div>
      </Container>
    </div>
  );
};
