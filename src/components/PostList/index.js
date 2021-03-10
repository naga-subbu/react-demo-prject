// Libraries
import React from "react";
import PropTypes from "prop-types";
import { List } from 'semantic-ui-react';

// Components
import Post from "../Post";


class PostList extends React.Component {
	static propTypes = {
		posts: PropTypes.array
	}

	static defaultProps = {
		posts: []
	}

	render() {
		const { posts } = this.props;
		return(
			<section>
				<h1>Post List</h1>
				{
					posts && posts.length > 0
						? posts.map(value => {
							return (
								<React.Fragment key={value.id}>
								<List celled>	
								<Post
									id={value.id}
									title={value.title}
									body={value.body}
									userId={value.userId}
									postId={value.id}
								/>
								</List>
								</React.Fragment>
							);
						})
						: <h2>No Posts Yet</h2>
				}
			</section>
		);
	}
}

export default PostList;
