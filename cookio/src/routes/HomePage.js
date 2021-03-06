import React, { Component } from 'react';
import Logo from '../img/img3.jpg';
import Semicircle from '../img/img1.png';
import Button from 'react-bootstrap/Button';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	

	render() {
		return (
			<div>
				<div id='img-cont'>
					<div id='logo-cont' 
						data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-duration="900">
						<img src={Logo} alt='' />
						<h3>The last cooking website you will ever visit.</h3>
						<Button variant='outline-dark'>Learn More!</Button>
					</div>
					<div id='circle-cont'>
						<img id='semicircle' src={Semicircle} alt='' />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
