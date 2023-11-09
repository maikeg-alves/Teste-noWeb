import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";
import { logo, marblesMenu } from "../../assets/svg";

import { useMediaQuery } from "usehooks-ts";
import { NavigationMobile } from "./NavigationMobile";
import { NavDropdown } from "./NavDropdown";
import { categoriesItems } from "../../data";

interface NavigationProps {}

const Navigation: React.FunctionComponent<NavigationProps> = () => {
  const isMobile = useMediaQuery("(min-width: 1024px)");

  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const isSelected = (index: number) => {
    return selectedItem === index ? "selected" : "";
  };

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${marblesMenu})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "left",
  };

  return (
    <Col lg={12} className="navigation">
      <Col
        className="container-nav align-items-center "
        style={backgroundStyle}
      >
        <Col md={4} className="logo">
          <img src={logo} alt="Logo" />
        </Col>

        <Col
          lg={7}
          md={3}
          xs={3}
          className="rectangle"
          style={{ justifyContent: isMobile ? "space-between" : "center" }}
        >
          {isMobile ? (
            <Row className="menu-bar align-items-center">
              <div className="navigationItem col-auto"></div>
              <div className="navigationItem col-lg-auto col-md-3">
                <a
                  href="/"
                  className={`${isSelected(0)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(0);
                  }}
                >
                  <span>Home </span>
                </a>
              </div>
              <div className="navigationItem col-lg-auto col-md-3 ">
                <NavDropdown
                  title="Categorias"
                  items={categoriesItems}
                  handleItemClick={(e) => handleItemClick(e)}
                  isSelected={isSelected(1)}
                />
              </div>
              <div className="navigationItem col-lg-auto col-md-3 ">
                <a
                  href="/about"
                  className={`${isSelected(2)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(2);
                  }}
                >
                  <span>Sobre</span>
                </a>
              </div>
              <div className="navigationItem col-lg-auto col-md-3 ">
                <a
                  href="/location"
                  className={`${isSelected(3)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(3);
                  }}
                >
                  <span>Localização</span>
                </a>
              </div>
              <Col md={"auto"} className="contact">
                <button>
                  <a href="/contact">
                    <p>Contato</p>
                  </a>
                </button>
              </Col>
            </Row>
          ) : (
            <>
              <NavigationMobile />
            </>
          )}
        </Col>
      </Col>
    </Col>
  );
};

export { Navigation };
