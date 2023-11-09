import React from "react";
import { arrowdow, cover } from "../../assets/svg";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../Button";

import "./style.css";

interface PresentationProps {}

const Presentation: React.FunctionComponent<PresentationProps> = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <>
      <div style={backgroundStyle}>
        <Container className="w-100 vh-100 p-4">
          <Row className=" h-100 flex-row flex-column align-content-start">
            <Col md={6}>
              <div className="title-presentation my-3">
                <h1>ILUMINE O SEU DIA A DIA!</h1>
              </div>
              <Col md={10} className="text-presentation my-3">
                <p>
                  Aqui na Elétrica J. Santos queremos trazer mais luz para o seu
                  dia a dia! Temos produtos para toda sua casa com a melhor
                  qualidade e atendimento da região!
                </p>
              </Col>
            </Col>
            <Row>
              <Col md={4}>
                <div className="mb-3 box">
                  <Button label="VEJA NOSSOS PRODUTOS" variant="primary" />
                </div>
                <div className="mb-3 box">
                  <Button label="NOS CONHEÇA MELHOR" variant="default" />
                </div>

                <div className="d-flex align-items-center justify-content-start">
                  <div className="icon-arrow">
                    <img src={arrowdow} alt="" />
                  </div>
                  <div className="link-Still mr-3">
                    <a href="/#">Role para ver mais</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
};

export { Presentation };
