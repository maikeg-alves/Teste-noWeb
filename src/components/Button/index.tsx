import React from "react";
import "./style.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "default";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  onClick,
  variant,
}) => {
  return (
    <button className={variant} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
