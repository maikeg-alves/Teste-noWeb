import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { productsdata } from "../../data";
import CardProduto from "../CardProduct";

interface ProductsProps {}

const Products: React.FunctionComponent<ProductsProps> = () => {
  return (
    <>
      <div className="rectangle-products">
        <Container>
          <Row style={{ marginTop: "10rem" }}>
            <Col md={12} className="title-products">
              <h2>PRODUTOS EM DESTAQUE</h2>
            </Col>
            <Col md={12} className="list-products">
              {productsdata.map((produto, index) => (
                <CardProduto key={index} produto={produto} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export { Products };
