// Libraries
import React from "react";
import PropTypes from "prop-types";

// Assets
import './styles.css';

class TextInput extends React.Component {
	static propTypes = {
		value: PropTypes.string,
		onValueChange: PropTypes.func
	}

	handleChange = e => {
		const { onValueChange } = this.props;
		e.preventDefault();
		var value = e.target.value;
		if(onValueChange) {
			onValueChange(value);
		}
	}

	render() {
		const { value } = this.props;
		return(
			<div className="wrapper">
				<input
					className="input"
					style={{
						marginTop: "0px",
						marginBottom: "0px"
					}}
					type="text"
					value={value}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default TextInput;
