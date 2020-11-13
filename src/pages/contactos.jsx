import React from "react";
import  Header  from "../components/esentials/header"
import Contacts from '../components/contact/contacts'
import Footer from "../components/esentials/footer"
import '../styles/style.css'

export default class RememberPage extends React.Component {
	render() {
		return (
			<React.StrictMode>
				<Header />
               <Contacts/>
            <Footer />
			</React.StrictMode>
		);
	}
}