import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

export const Hero1 = () => {
  return (
    <div className="city">
      <Container>
        <div className="p-5">
          <div>
            <h1 className="fw-bold mx-5 mt-5">
              The Uber you know, reimagined for business
            </h1>

            <p className="mt-5 mx-5">
              A platform for managing global rides and meals, and local
              deliveries, for companies of any size.
            </p>
          </div>
          <Button variant="dark" className="mt-3 p-3 fw-bold mx-5">
            Get started
          </Button>
        </div>
      </Container>
    </div>
  );
};
