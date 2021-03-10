// Libraries
import React from "react";
import PropTypes from "prop-types";
import { Context } from "../../libs/context";
import api from "../../libs/api";

// Components
import { Button, Form } from 'semantic-ui-react'

class AddPost extends React.Component {
	static contextType = Context;

	static propTypes = {
		history: PropTypes.any
	}

	state = {
		title: "",
		message: "",
		userId: 0
	}

	onFieldChange = e => {
		e.preventDefault();
		const value = e.target.value;
		const property = e.target.getAttribute("data-prop");
		this.setState({ [property]: value });
	}

	onSubmit = () => {
		const { title, message, userId } = this.state;
		if(title && message && userId !== 0) {
			const model = {
				title: title,
				body: message,
				userId: userId
			};
			api.post("/posts", model).then(response => {
				if(response.data) {
					response.data.userId = Number(response.data.userId);
					this.context.addPost(response.data);
					this.props.history.push("/posts");
				}
			}).catch(error => {
				alert(JSON.stringify(error));
			});
			
		} else {
			alert("Please fill all the fields")
		}
	}

	render() {
		const { users } = this.context;
		const { title, message, userId } = this.state;
		return (
			<section>
				<h1>Add Post</h1>
				<div>
				<Form>
					<Form.Field>
						<label>Title</label>
						<input onChange={this.onFieldChange} value={title} placeholder='Title' data-prop="title" />
					</Form.Field>
					<Form.Field>
						<label>Message</label>
						<textarea onChange={this.onFieldChange} value={message} placeholder='Message' data-prop="message" />
					</Form.Field>
					<Form.Field>
						<label>User</label>
						<select data-prop="userId" value={userId} onChange={this.onFieldChange} placeholder="Select User">
							<option  value={0}>Select User</option>
							{
								users && users.length > 0
									? users.map(value => {
										return (
											<option
												key={value.id}
												value={value.id}
											>
												{value.name}
											</option>
										);
									})
									: <option value={0}>No Available Users</option>
							}
						</select>
					</Form.Field>
					<Button type='submit' onClick={this.onSubmit}>Submit</Button>
				</Form>
				</div>
			</section>
		);
	}
}

export default AddPost;
