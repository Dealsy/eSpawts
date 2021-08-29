import React, { Component } from 'react';
import './MyTournaments.scss';

export class MyTournaments extends Component {
	render() {
		return (
			<div className="noHistory">
				<hr style={{borderColor : "#0678F7"}} />
				<p>You have no history...</p>
				<hr style={{borderColor : "#0678F7"}} />
				
			</div>
		);
	}
}

export default MyTournaments;
