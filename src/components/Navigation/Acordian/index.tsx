import React from "react";
import "./style.css";
import { Accordion } from "react-bootstrap";
import { ICategory } from "../../../interface";

interface AccordionMenuProps {
  title: string;
  items: ICategory[];
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ items, title }) => {
  return (
    <Accordion className="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body className="">
          {items.map((item, index) => (
            <li key={index}>
              <div className="category-item">
                <div className="img-container">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="link">
                  <i className="fa fa-chevron-down"></i>
                  <a href={item.link}>{item.title}</a>
                </div>
              </div>
            </li>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionMenu;
