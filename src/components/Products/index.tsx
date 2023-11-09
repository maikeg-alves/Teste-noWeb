import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface ProductsProps {}

const Products: React.FunctionComponent<ProductsProps> = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} className="title-products">
            <h2>PRODUTOS EM DESTAQUE</h2>
          </Col>
          <Col md={12} className="list-products"></Col>
        </Row>
      </Container>
    </div>
  );
};

export { Products };
