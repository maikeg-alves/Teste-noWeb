import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import { CardCategory } from "..";
import { categoriesItems } from "../../data";

interface CategoriesProps {}

const Categories: React.FunctionComponent<CategoriesProps> = () => {
  return (
    <>
      <div className="cover-categorias">
        <Container>
          <div className="title-categorias">
            <h2>CATEGORIAS</h2>
            teste
          </div>
          <div className="list-categorias">
            {categoriesItems.map((item, index) => (
              <CardCategory key={index} Item={item} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export { Categories };
