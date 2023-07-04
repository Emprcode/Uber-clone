import React from "react";
import { Row, Col } from "react-bootstrap";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="info">
          <Row className="p-2">
            <Col className="">
              <p>
                <i class="fa-solid fa-chart-simple"></i>
              </p>
              <p>Drive or Deliver</p>
            </Col>
            <Col>
              <p>
                <i class="fa-solid fa-chart-simple"></i>
              </p>
              <p>Drive or Deliver</p>
            </Col>
            <Col className="">
              <p>
                <i class="fa-solid fa-chart-simple"></i>
              </p>
              <p>Drive or Deliver</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
