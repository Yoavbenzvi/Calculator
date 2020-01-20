import React from 'react';

class NumberButton extends React.Component {

	handleClick = (num) => {
		this.props.setCurrentNumber(num)
	}

	render() {
		return(
			<div onClick={() => this.handleClick(this.props.number)}>
				{this.props.number}
			</div>
		)
	}
}

export default NumberButton;