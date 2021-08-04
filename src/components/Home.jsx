import React from "react";
import { Container, Row, Col } from 'react-grid-system';

function Home() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          One of three columns
        </Col>
        <Col sm={4}>
          One of three columns
        </Col>
        <Col sm={4}>
          One of three columns
        </Col>
      </Row>
    </Container>
  );
}

export default Home;