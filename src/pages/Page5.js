import React from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import { Col, Container, Row } from "react-bootstrap";

export const Page5 = () => {
  return (
    <div>
      <Container className="">
        <Row className="mt-5">
          <Col className="p-5 ">
            <div className="h4">
              <i class="fa-solid fa-users"></i>
            </div>
            <h4 className="mt-4">About us</h4>

            <p className="mt-4">
              Find how we started, what drives us and how we're reimagining the
              world.
            </p>

            <div className="bottom-info curser">Learn more about Uber</div>
          </Col>
          <Col className="p-5 ">
            <div className="h4">
              <i className="fa-solid fa-newspaper"></i>
            </div>
            <h4 className="mt-4">Uber Blog</h4>

            <p className="mt-4">
              See announcements about our latest releases, initiatives and
              partnerships.
            </p>

            <div className="bottom-info curser">Go to Uber Blog</div>
          </Col>
          <Col className="p-5 ">
            <div className="h4">
              <i className="fa-solid fa-house"></i>
            </div>
            <h4 className="mt-4">Global citizenship</h4>

            <p className="mt-4">
              Read about our commitment to making a positive impact in the
              cities we serve.
            </p>

            <div className="bottom-info curser ">See our partnerships</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
