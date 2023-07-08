import React from "react";
import car from "../assets/car.png";
import { Col, Container, Row } from "react-bootstrap";

export const Page3 = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col className="p-5">
            <div className="title mt-5">Rent a car</div>

            <p className="mt-5">
              Whether it's a holiday getaway, a day around town or a van to move
              house - find the right vehicle for you through our partners at
              Uber Carshare.
            </p>

            <div className="bottom-info curser">Learn more</div>
          </Col>
          <Col>
            <img src={car} alt="car" width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
