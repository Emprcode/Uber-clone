import React from "react";
import driver from "../assets/driver.png";
import rider from "../assets/rider.png";
import { Col, Container, Row } from "react-bootstrap";

export const Page7 = () => {
  return (
    <div>
      <Container>
        <Row className="gap-4 mt-5 p-4">
          <Col className=" uber-app">
            <h2 className="">Sign up to drive</h2>
            <div className="h2">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <hr />
          </Col>

          <Col className="uber-app">
            <h2 className="">Sign up to ride</h2>

            <div className="h2">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
