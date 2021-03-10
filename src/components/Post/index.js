// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import { Button, Image, List, Confirm} from 'semantic-ui-react';
// Importing withRouter to utilize history
import {withRouter} from "react-router";
// importing api for delete API call
import api from "../../libs/api";
//importing Context to fetch users list to get userName for userId
import { Context } from "../../libs/context";

// Assets
import "./styles.css";

class Post extends React.Component {
	state = { 
		open: false,
		activePostId: 0
	}
	static contextType = Context;
	
	static propTypes = {
		userId: PropTypes.number,
		postId: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string,
		history: PropTypes.any
	}

	//Function to invoke ModifyPost component to modify the post
	modifyPost = (postId) => {
		let str = `/posts/modify/${postId}`;
		this.props.history.push(str);
	}
	//Function to delete the post
	deletePost = (postId) => {
		if(postId !== 0) {
			let deleteURI = `/posts/${postId}`;
			api.delete(deleteURI).then(response => {
				if(response.status === 200) {
					this.context.deletePost(postId);
					this.props.history.push("/posts");
				}
				else
				{
					alert("Unable to delete post. HTTP status: "+response.status);
				}
			}).catch(error => {
				alert("Error: "+JSON.stringify(error));
			});
			
		} else {
			alert("No pushID passed to delete the post")
		}
	}
	// Function to show the confirmation window
	show = () => this.setState({ open: true })
	handleConfirm = () => {
		this.setState({ open: false });
		this.deletePost(this.props.postId);
		this.props.history.push("/posts");
	}
	handleCancel = () => this.setState({ open: false })

	render() {
		const { userId, postId, title, body } = this.props;
		const {users} = this.context;
		//debugger;
		const userName = users && users.length>0?users.filter(user => user.id===Number(userId))[0].name:"unknown user";
		return(
					<List.Item className='ListItem'>
					<List.Content floated='right'>
						<Button onClick={() => {this.modifyPost(postId)} }>Modify</Button>
						<Button onClick={this.show}>Delete</Button>
						<Confirm
							open={this.state.open}
							cancelButton='Never mind'
							confirmButton="Yes, delete post"
							onCancel={this.handleCancel}
							onConfirm={this.handleConfirm}
						/>
					</List.Content>
					<Image avatar src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' floated="left"/>
						<List.Header>{title}</List.Header>
						{body} <br /> 
						<div className="PostDescription">Posted by {userName} 
						</div>				
					</List.Item>
		);
	}
}

export default withRouter(Post);
