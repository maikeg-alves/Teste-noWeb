import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../Button";
import "./style.css";
import { loja } from "../../assets/svg";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <>
      <div className="cover-about ">
        <div className="about-retangule"></div>
        <Container className="about">
          <div className="title-about">
            <h2>SUA MELHOR OPÇÃO </h2>
          </div>
          <Row className=" align-items-center justify-content-center">
            <Col md={5} className="img-about">
              <img src={loja} alt="loja-image" />
            </Col>
            <Col md={5} className="text-about">
              <div className="text">
                <p>
                  Desde 1970 somos especializados em materiais elétricos, sendo
                  uma das principais distribuidoras do setor. Oferecemos os
                  melhores produtos, com o preço que cabe no seu bolso e atende
                  todas as necessidades do seu dia a dia. Aqui você irá
                  encontrar lustres, luminárias, utilidades domésticas,
                  ferramentas, acessórios, lâmpadas, fios e cabos, quadros de
                  distribuição, caixas de entrada padrão Eletropaulo, materiais
                  elétricos em geral, equipamentos de segurança e comunicação.
                </p>
              </div>
              <div className="button-about mt-4">
                <Button label="Saiba mais sobre nós" variant="secondary" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export { About };
