// Libraries
import React from "react";
import PropTypes from "prop-types";
import { Context } from "../../libs/context";

// Components
import PostList from "../../components/PostList";
import { Button} from 'semantic-ui-react'

class Posts extends React.Component {
	static contextType  = Context;

	static propTypes = {
		history: PropTypes.any
	}

	addUser = () => {
		this.props.history.push("/posts/create");
	}

	render() {
		const { posts } = this.context;
		return (
			<section>
				<div>
					<Button primary onClick={this.addUser}>Add Post</Button>
				</div>
				<PostList posts={posts} />
			</section>
		);
	}
}

export default Posts;
