import React from "react";

import { Navigation } from "..";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export { Header };
