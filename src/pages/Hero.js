import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import uber from "../assets/uber.jpg";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="info bg-light">
          <Row className="p-5 ">
            <Col className="flex-col text-center h5 curser">
              <p>
                <i class="fa-solid fa-chart-simple"></i>
              </p>
              <p>Drive or Deliver</p>
            </Col>
            <Col className="flex-col text-center h5 curser">
              <p>
                <i class="fa-solid fa-utensils"></i>
              </p>
              <p>Eat</p>
            </Col>
            <Col className="flex-col text-center h5 curser">
              <p>
                <i class="fa-solid fa-car"></i>
              </p>
              <p>Ride</p>
            </Col>
            <hr />
          </Row>
          <div>
            <div className="title">Get in the driver's</div>
            <div className="title">seat and get paid</div>
            <p className="mt-5 mx-5">
              Drive on the platform with the largest network of active riders.
            </p>
          </div>
          <Button variant="dark" className="mt-3 p-3 fw-bold mx-5">
            Sign up to drive
          </Button>

          <div className="bottom-info curser">
            Learn more about driving and delivering
          </div>
        </div>
      </div>
    </div>
  );
};
