import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

class UserList extends React.Component {
	static propTypes = {
		users: PropTypes.array
	}

	static defaultProps = {
		users: []
	}

	render() {
		const { users } = this.props;
		return(
			<section>
				<Table striped={true}>
    				<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Username</Table.HeaderCell>
							<Table.HeaderCell>Phone</Table.HeaderCell>
							<Table.HeaderCell>Address</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{
							users && users.length > 0 && users.map((value) => {
								return (
									<Table.Row key={value.id}>
										<Table.Cell>{value.name}</Table.Cell>
										<Table.Cell>{value.username}</Table.Cell>
										<Table.Cell>{value.phone}</Table.Cell>
										<Table.Cell>{`${value.address.street} ${value.address.suite}`}</Table.Cell>
									</Table.Row>
								);
							})
						}
					</Table.Body>
				</Table>
			</section>
		);
	}
}

export default UserList;
