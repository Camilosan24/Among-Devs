import React from "react";
import Header from "../../components/esentials/header";
import Footer from "../../components/esentials/footer";

const Layout = (props) => {
  //
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;