import { Component } from 'react';
import './styles/Coin.css';
import heads from './images/heads.png';
import tails from './images/tails.png';

class Coin extends Component {
	render() {
		let { flipped } = this.props;
		let code = <img className="Coin" src={flipped === 'heads' ? heads : tails} alt={flipped} />;
		return code;
	}
}

export default Coin;
