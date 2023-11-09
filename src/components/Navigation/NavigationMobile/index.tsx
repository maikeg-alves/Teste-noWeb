import React from "react";
import "./style.css";
import { AlignJustify, XCircle } from "lucide-react";
import AccordionMenu from "../Acordian";
import { categoriesItems } from "../../../data";

interface NavigationMobileProps {}

const NavigationMobile: React.FunctionComponent<NavigationMobileProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navigation-mobile">
        <button className="menu-toggle" onClick={toggleMenu}>
          <AlignJustify />
        </button>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-close">
            <button onClick={() => setIsMenuOpen(false)}>
              <XCircle />
            </button>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <AccordionMenu title="Categorias" items={categoriesItems} />
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Localização</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { NavigationMobile };
