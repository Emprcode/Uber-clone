import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ScrollUpButton } from "../components/scrollUpButton";

export const Footer = () => {
  return (
    <div className="footerbg text-light">
      <Container>
        <Row className="p-5">
          <h4>Uber</h4>

          <p className="mt-3">Visit Help Center</p>
        </Row>

        <Row className="">
          <Col className="p-5 ">
            <h5 className="mb-4">Company</h5>

            <div className="">
              <p> About us</p>
              <p> Our offerings</p>
              <p> Uber Blog</p>
              <p>Investors</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Gift cards</p>
            </div>
          </Col>
          <Col className="p-5 ">
            <h5 className="mb-4">Products</h5>
            <div className="">
              <p> Ride</p>
              <p> Drive</p>
              <p> Deliver</p>
              <p>Eat</p>
              <p>Uber for Business</p>
              <p>Uber Freight</p>
            </div>
          </Col>
          <Col className="p-5 ">
            <h5 className="mb-4"> Global citizenship</h5>

            <div className="">
              <p>Safety</p>
              <p> Diversity and Inclusion</p>
              <p> Sustainability</p>
            </div>
          </Col>
          <Col className="p-5 ">
            <h5 className="">Travel</h5>

            <div className="mb-4">
              <p>Airports </p>
              <p> Cities </p>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <ScrollUpButton />
        </div>
      </Container>
    </div>
  );
};
