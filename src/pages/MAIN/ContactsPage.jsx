import React from "react";
import Contact from "../../components/Contactos/Contactos";
import "../../styles/plantilla.css";

class ContactsPage extends React.Component {
	render() {
		return (
			<div className="background">
				<Contact />
			</div>
		);
	}
}

export default ContactsPage;