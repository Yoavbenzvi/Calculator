import React from 'react';

class ActionButton extends React.Component {

	handleClick = (sign) => {
		this.props.setCurrentAction(sign)
	}

	render()  {
		return(
			<div onClick={() => this.handleClick(this.props.action)}>
				{this.props.action}
			</div>
		)
	}


}

export default ActionButton;