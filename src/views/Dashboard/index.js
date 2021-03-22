// Libraries
import React from "react";
import { Context } from "../../libs/context";

// Components
// import TextInput from "../../components/TextInput";
import UserList from "../../components/UserList";

class Dashboard extends React.Component {
	static contextType  = Context;
	
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