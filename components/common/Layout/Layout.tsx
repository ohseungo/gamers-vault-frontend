import React from "react";
import Navbar from "components/common/Navbar";

interface Props {
  pageProps: {
    home?: boolean;
  };
  children?: React.ReactNode;
}

const Layout = ({ children, pageProps }: Props) => {
  const isHome = pageProps?.home;
  return (
    <div className="bg-secondary h-full">
      {!isHome && <Navbar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
