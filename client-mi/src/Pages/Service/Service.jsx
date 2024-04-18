import React from "react";
import './Service.css';
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsymmetrik } from "@fortawesome/free-brands-svg-icons";
import {
  faCamera,
  faCannabis,
  faRibbon,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const services = [
  {
    icon: faCannabis,
    title: "Product Design",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations.",
  },
  {
    icon: faRibbon,
    title: "Date Entry",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations.",
  },
  {
    icon: faCamera,
    title: "File Manager",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations.",
  },
  {
    icon: faAsymmetrik,
    title: "Get your documentation",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations.",
  },
];

const ServiceItem = ({ service }) => (
  <Card className="ezy__service20-card rounded-0 border-0 p-3 mt-4">
    <Card.Body>
      <div className="ezy__service20-icon mb-2">
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <h5 className="my-4">{service.title}</h5>
      <p className="opacity-75 mt-3">{service.description}</p>
    </Card.Body>
  </Card>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

const Shapes = () => (
  <>
    <svg
      className="ezy__service20-shape-one position-absolute"
      width="405"
      height="626"
      viewBox="0 0 405 626"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-302.65"
        y="296.986"
        width="433.92"
        height="140"
        rx="73.8464"
        transform="rotate(-33.796 -302.65 296.986)"
        fill="#7434F8"
        fillOpacity="0.5"
      />
      <rect
        x="-315"
        y="502.403"
        width="666.584"
        height="140"
        rx="73.8464"
        transform="rotate(-33.796 -315 502.403)"
        fill="#FAA515"
        fillOpacity="0.5"
      />
    </svg>
    <svg
      className="ezy__service20-shape-two position-absolute end-0"
      width="340"
      height="658"
      viewBox="0 0 495 778"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="389"
        cy="389"
        r="389"
        fill="var(--ezy-theme-color)"
        fillOpacity="0.19"
      />
    </svg>
  </>
);

const Service = () => {
  return (
    <section className="ezy__service20 light">
      <Shapes />

      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h2 className="ezy__service20-heading mb-3">
              What MinaGlobe Innovations known for...
            </h2>
            <p className="ezy__service20-sub-heading">
              An activity that requires a person's mental or physical effort is
              work.If a person is trained for a certain type physical effort.
            </p>
          </Col>

          <Col xs={12} md={8}>
            <Row className="ezy__service20-cards">
              <Col xs={12} md={6}>
                <div>
                  {services.slice(0, 2).map((service, i) => (
                    <ServiceItem service={service} key={i} />
                  ))}
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="mt-md-5 pt-4">
                  {services.slice(2, 4).map((service, i) => (
                    <ServiceItem service={service} key={i} />
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;