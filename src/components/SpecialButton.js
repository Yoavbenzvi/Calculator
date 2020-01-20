import React from 'react';

class SpecialButton extends React.Component {

	handleClick = () => {
		this.props.onClick()
	}

	render() {
		return(
			<div onClick={() => this.handleClick()}>
				{this.props.content}
			</div>
		)
	}
}

export default SpecialButton;