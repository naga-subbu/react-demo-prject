// Libraries
import React from "react";
import PropTypes from "prop-types";
import { Context } from "../../libs/context";
import api from "../../libs/api";
import '../AddPost/styles.css'

// Components
import { Button, Form } from 'semantic-ui-react'

//Component to modify the post details
class ModifyPost extends React.Component {
	static contextType = Context;
	
	static propTypes = {
		history: PropTypes.any
	}
	// Getting postId state paramter from query params
	state = {
		title: "",
		message: "",
		userId: 0,
		postId: this.props.match.params.postId
	}

	onFieldChange = e => {
		e.preventDefault();
		const value = e.target.value;
		const property = e.target.getAttribute("data-prop");
		this.setState({ [property]: value });
	}

	onSubmit = () => {
		const { title, message, userId, postId} = this.state;
		if(title && message && userId !== 0) {
			const model = {
				postId: postId,
				title: title,
				body: message,
				userId: userId
			};
			let putURI = `/posts/${postId}`;
			//Invoking PUT API to modify the post
			api.put(putURI, model).then(response => {
				if(response.data) {
					response.data.userId = Number(response.data.userId);
					this.context.updatePost(response.data);
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
		const { users, posts} = this.context;
		const { userId, postId, title, message} = this.state;
		//Retrieving title and message from existing post to display as place holder
		const t = posts && posts.length>0?posts.filter(post => post.id===Number(postId))[0].title:'Title';
		const m = posts && posts.length>0?posts.filter(post => post.id===Number(postId))[0].body:'Message';
		//debugger;
		return (
			<section>
				<h1 className='FormTitle'>Modify Post</h1>
				<div>
				<Form className='Form'>
					<Form.Field>
						<label>Title</label>
						<input onChange={this.onFieldChange} value={title} placeholder={t}  data-prop="title" />
					</Form.Field>
					<Form.Field>
						<label>Message</label>
						<textarea onChange={this.onFieldChange} value={message} placeholder={m} data-prop="message" />
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
					<Button type='submit' onClick={this.onSubmit} primary>Submit</Button>
				</Form>
				</div>
			</section>
		);
	}
}

export default ModifyPost;
