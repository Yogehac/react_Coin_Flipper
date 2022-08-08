import { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class Flipper extends Component {
	static defaultProps = {
		coins: [ 'heads', 'tails' ]
	};

	constructor() {
		super();
		this.state = {
			coin: null,
			flips: 0,
			heads: 0,
			tails: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	flipCoin() {
		let newCoin = choice(this.props.coins);
		this.setState((st) => {
			return {
				coin: newCoin,
				flips: st.flips + 1,
				heads: st.heads + (newCoin === 'heads' ? 1 : 0),
				tails: st.tails + (newCoin === 'tails' ? 1 : 0)
			};
		});
	}

	handleClick() {
		this.flipCoin();
	}

	render() {
		let { flips, heads, tails, coin } = this.state;
		return (
			<div>
				<h1>Coin Flipper</h1>
				{coin && <Coin flipped={this.state.coin} />}
				<button onClick={this.handleClick}>Flip me</button>
				<p>
					Out of {flips} flips, {heads} heads and {tails} tails
				</p>
			</div>
		);
	}
}

export default Flipper;
