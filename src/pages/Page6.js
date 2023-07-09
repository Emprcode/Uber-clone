import React from "react";
import driver from "../assets/driver.png";
import rider from "../assets/rider.png";
import { Col, Container, Row } from "react-bootstrap";

export const Page6 = () => {
  return (
    <div className="bg-color p-5" >
      <Container >
        <Row className="mt-5">
          <h1 className="fw-bold mb-5">
          There's more to love in the apps
          </h1>
        </Row>
        <Row className="gap-4 text-center">
          <Col className=" p-4 uber-app ">
            <img className="rounded" src={driver} alt="driver" width="30%" />
            <h4 className="">Download the Driver app</h4>

            <div className="h2"><i class="fa-solid fa-arrow-right"></i></div>
        
          </Col>
          <Col className="p-4 uber-app">
            <img className="rounded" src={rider} alt="rider" width="30%" />
            <h4 className="">Download the Uber app</h4>

           

            <div className="h2"><i class="fa-solid fa-arrow-right"></i></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
