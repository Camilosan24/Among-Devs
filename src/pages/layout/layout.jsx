import React from "react";
import Header from "../../components/esentials/header";
import Footer from "../../components/esentials/footer";
import "../../styles/layout.css";

const Layout = (props) => {
	//
	return (
		<div className="div-container-layout">

			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
