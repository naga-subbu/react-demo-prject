import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import './styles.css'
// This component is for Header displaying with help of Menu semantic-ui component
class ExtendedMenu extends React.Component {
	state = { activeItem: 'Dashboard' };
	
  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	render() {
		let { activeItem } = this.state;
		if (window.location.pathname.startsWith('/posts')) {
			activeItem= 'Posts';
		}
		else if (window.location.pathname === '/user') {
			activeItem= 'Users';
		}
		return (
			<div>
				<h1 className='header'>ReactJS Demo</h1>
				<Menu attached='top' className='menuheader' tabular>
				<Menu.Item as={ Link } 
					name='Dashboard'
					active={activeItem === 'Dashboard'}
					onClick={this.handleItemClick}
					to="/dashboard"
				/>
				<Menu.Item as={ Link }
					name='Posts'
					active={activeItem === 'Posts'}
					onClick={this.handleItemClick}
					to="/posts"
				/>
				<Menu.Item as={ Link }
					name='Users'
					active={activeItem === 'Users'}
					onClick={this.handleItemClick}
					to="/user"
				/>
				</Menu>
			</div>
		);
	}
}

export default withRouter(ExtendedMenu);
