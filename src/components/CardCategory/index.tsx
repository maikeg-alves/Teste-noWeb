import React from "react";
import "./style.css";
import { ICategory } from "../../interface";

interface CardCategoryProps {
  Item: ICategory;
}

const CardCategory: React.FC<CardCategoryProps> = ({ Item }) => {
  return (
    <div className="card-category">
      <div className="title-category">
        <h3>{Item.title}</h3>
      </div>
      <div className="img-category">
        <img src={Item.image} alt={Item.title} />
      </div>
    </div>
  );
};

export { CardCategory };
