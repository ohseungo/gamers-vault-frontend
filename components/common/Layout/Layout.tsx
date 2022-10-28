import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav>Here Header</nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
