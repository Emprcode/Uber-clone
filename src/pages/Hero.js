import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import uber from "../assets/uber.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Hero = () => {
  return (
    <div className="hero" data-aos="fade-up" data-aos-duration="1000">
      <Container>
        <div className="box">
          <div className="info">
            <Row className="p-5 ">
              <Col className="text-center h5 curser">
                <p>
                  <i className="fa-solid fa-chart-simple"></i>
                </p>
                <p>Drive or Deliver</p>
              </Col>
              <Col className=" text-center h5 curser">
                <p>
                  <i className="fa-solid fa-utensils"></i>
                </p>
                <p>Eat</p>
              </Col>
              <Col className="text-center h5 curser">
                <p>
                  <i className="fa-solid fa-car"></i>
                </p>
                <p>Ride</p>
              </Col>
              <hr />
            </Row>
            <div className="mx-5">
              <div className="title">Get in the driver's</div>
              <div className="title">seat and get paid</div>
              <p className="mt-5">
                Drive on the platform with the largest network of active riders.
              </p>
            </div>
            <Button variant="dark" className="mt-3 p-3 fw-bold mx-5">
              Sign up to drive
            </Button>

            <div className="bottom-info mx-5 curser">
              Learn more about driving and delivering
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
