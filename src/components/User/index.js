// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import { Card } from "semantic-ui-react";

class User extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		imageUrl: PropTypes.string,
		username: PropTypes.string,
		address: PropTypes.string,
		phone: PropTypes.string
	}

	static defaultProps = {
		username: "Misael",
		imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_overlay_icon.asp&psig=AOvVaw1HEjEYGF7ktr2Dlr5oZFVg&ust=1614895997267000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDWoMWSle8CFQAAAAAdAAAAABAD",
		category: "Developer",
		address: "Saltillo 123",
		phone: ""
	}

	render() {
		const { name, imageUrl, username, address, phone } = this.props;
		return(
			<React.Fragment>
				<Card
					image={imageUrl}
					header={name}
					meta={username}
					description={address}
					phone={phone}
				/>
			</React.Fragment>
		);
	}
}

export default User;
