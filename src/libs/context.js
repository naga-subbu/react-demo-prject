import React from "react";

const Context = React.createContext({});

class ContextProvider extends React.Component {

	state = {
		users: [],
		updateUsers: users => {
			this.setState({ users: users });
		},
		posts: [],
		updatePosts: posts => {
			this.setState({ posts: posts });
		},
		addPost: model => {
			this.setState({ posts: [...this.state.posts, model] });
		},
		updatePost: model => {
			this.setState({ 
				posts: this.state.posts.map(value => {
					if(value.id === model.id) {
						return { ...value, ...model };
					}
					return value;
				})
			})
		},
		deletePost: id => {
			this.setState({
				posts: this.state.posts.filter(v => v.id !== id)
			});
		}
	}
	
	render() {
		return(
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}

}

export { ContextProvider, Context };
