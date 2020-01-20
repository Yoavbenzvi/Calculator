import React from 'react';
import './App.css';
import NumberButton from './components/NumberButton';
import ActionButton from './components/ActionButton';
import SpecialButton from './components/SpecialButton';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			screen: null,
			result: null,
		}
	}


	clear = () => {
		this.setState({
			screen: null,
			result: null,
		})
	}

	equal = () => {
		const currentScreen = this.state.screen
		if(!this.state.result && this.state.screen && this.state.screen.charAt(this.state.screen.length-1) >= '0' && this.state.screen.charAt(this.state.screen.length-1) <= '9') {
			const resultScreen = this.state.screen
			const result = eval(resultScreen)
			this.setState({
				screen: result,
				result: result
			})
		}
	}

	setCurrentNumber = (num) => {
		if(!this.state.result) {
			if(!this.state.screen) {
				this.setState({
					screen: num,
				})
			} else {
				const newNumber = this.state.screen.toString() + num
				this.setState({
					screen: newNumber,
				})
			}
		}
	}

	setCurrentAction = (sign) => {
		if(this.state.screen) {
			const newScreen = this.state.screen + sign
			this.setState({
				screen: newScreen,
				result: null
			})
		}
	}


	//this.numbersArray = Array(9).fill(null).map((item, i) => <NumberButton className={"N"+(i+1)+" btn"} number={i+1} key={i} setCurrentNumber={this.setCurrentNumber}/>)

	render() {
		return(
			<div className="app">
				<div className="container">
					<span className="screen">
						{this.state.screen}
					</span>
					<SpecialButton content="C" className="clear" onClick={() => this.clear()} />
					<ActionButton className="divide" action="/" setCurrentAction={(sign) => this.setCurrentAction(sign)}/>
					<ActionButton className="multiply" action="*" setCurrentAction={(sign) => this.setCurrentAction(sign)}/>
					<ActionButton className="minus" action="-" setCurrentAction={(sign) => this.setCurrentAction(sign)}/>
					<ActionButton className="plus" action="+" setCurrentAction={(sign) => this.setCurrentAction(sign)}/>
					<NumberButton className="one" number="1" setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="two" number="2" setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="three" number="3" setCurrentNumber={this.setCurrentNumber}/>
					<SpecialButton content="=" className="equal" onClick={() => this.equal()} />
					<NumberButton className="four" number="4" setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="five" number="5" setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="six" number="6" setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="dot" number="." setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="seven" number="7" setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="eight" number="8" setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="nine" number="9" setCurrentNumber={this.setCurrentNumber}/>
					<NumberButton className="zero" number="0" setCurrentNumber={this.setCurrentNumber}/>
				</div>
			</div>
		)
	}
}

export default App;
