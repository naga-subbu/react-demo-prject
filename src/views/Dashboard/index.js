// Libraries
import React from "react";
import { Context } from "../../libs/context";

// Components
// import TextInput from "../../components/TextInput";
import UserList from "../../components/UserList";

class Dashboard extends React.Component {
	static contextType  = Context;

	state = {
		name: ""
	}

	// Used to play around with the TextInput
	sayHelloFn = () => {
		alert(`Hello ${this.state.name}`);
	}
	onChange = value => {
		this.setState({ name: value });
	}

	render() {
		const { users } = this.context;
		return (
			<section>
				<UserList users={users} />
			</section>
		);
	}
}

export default Dashboard;