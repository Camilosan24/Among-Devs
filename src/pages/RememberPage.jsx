import React from "react";
import  Header  from "../components/esentials/header"
import RememberTask from "../components/rememberTask/rememberTask"
import Footer from "../components/esentials/footer"



import '../styles/style.css'

class RememberPage extends React.Component {
	render() {
		return (
			<React.StrictMode>
				{/* <ButtonStart /> */}
				<Header />
				<RememberTask />
            <Footer />
			</React.StrictMode>
		);
	}
}


export default RememberPage;
