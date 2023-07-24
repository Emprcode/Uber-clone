import React from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import { Col, Container, Row } from "react-bootstrap";

export const Page4 = () => {
  return (
    <div>
      <Container className="">
        <Row className="mt-5 mx-4">
          <h1 className="fw-bold mt-4">
            Focused on safety, wherever you go
          </h1>
        </Row>
        <Row className="">
          <Col className="p-5 col-md-6">
            <img className="rounded" src={car1} alt="car" width="100%" />
            <h4 className="mt-5">Our commitment to your safety</h4>

            <p className="mt-4">
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </p>
            <Row>
              <Col className="bottom-info curser ">
                Read about our Community Guidelines
              </Col>
              <Col className="bottom-info curser">See all safety features</Col>
            </Row>
          </Col>
          <Col className="p-5 ">
            <img className="rounded" src={car2} alt="car" width="100%" />
            <h4 className="mt-5">Setting 10,000+ cities in motion</h4>

            <p className="mt-4">
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you're far from home.
            </p>

            <div className="bottom-info curser">View all cities</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
