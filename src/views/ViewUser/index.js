import React from "react";
import PropTypes from "prop-types";
import { Context } from "../../libs/context";
import { Card, Image } from 'semantic-ui-react'

class ViewUser extends React.Component {
	static contextType  = Context;
	static propTypes = {
		history: PropTypes.any,
		match: PropTypes.any
	}

	goBack = () => {
		this.props.history.push("/dashboard");
	}

	render() {
		const { users } = this.context;
		return (
			<div>
				<h1>Users list</h1>
				<Card.Group>
				{						
						users && users.length > 0 && users.map((value) => {
										return (
											<Card>
												<Card.Content>
													<Image
													floated='right'
													size='mini'
													src='https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png'
													/>
													<Card.Header>{value.name}</Card.Header>
													<Card.Meta>{value.username}</Card.Meta>
													<Card.Description>
													{`${value.address.street} ${value.address.suite}`}
													<br />Ph: {value.phone} 
													</Card.Description>
												</Card.Content>
												</Card>
												
										);
									})
				}
				</Card.Group>
				<div> <br/>
					<button onClick={this.goBack}>Go Back to Dashboard</button>
				</div>
			</div>
			
		);
	}
}

export default ViewUser;
