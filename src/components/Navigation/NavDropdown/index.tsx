import React from "react";

import "./style.css";
import { ICategory } from "../../../interface";
import { useOutsideClick } from "../../../hooks";

interface NavDropdownProps {
  title: string;
  items: ICategory[];
  handleItemClick: (index: number) => void;
  isSelected: string;
}

const NavDropdown: React.FunctionComponent<NavDropdownProps> = ({
  title,
  items,
  handleItemClick,
  isSelected,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    handleItemClick(1);
    setShowMenu(!showMenu);
  };

  const ref = useOutsideClick(() => {
    setShowMenu(false);
  }) as unknown as React.LegacyRef<HTMLUListElement>;

  return (
    <>
      <div className={`dropdown ${showMenu ? "open" : ""}`}>
        <span onClick={toggleMenu} className={isSelected}>
          {title}
        </span>
        <ul ref={ref}>
          {items.map((item, index) => (
            <li
              key={index}
              className={`${index !== items.length - 1 ? "mb-3" : ""}`}
            >
              <div className="category-item-drop">
                <div className="img-container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="link">
                  <a href={item.link}>{item.title}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { NavDropdown };
