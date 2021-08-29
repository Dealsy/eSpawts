import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import starcraft from '../Images/sc2_logo.png';
import Dota from '../Images/dota2.jpg';
import Lol from '../Images/lol.png';
import Oz from '../Images/oz.png';
import './banners.css'

export class Banners extends Component {
	render() {
		return (
				<Carousel className="Banner_styles" fade>
					<Carousel.Item>
						<img
                            
							className="d-block w-100 Banner_images"
							src={starcraft}
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 Banner_images "
							src={Dota}
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 Banner_images"
							src={Lol}
							alt="Third slide"
						/>
					</Carousel.Item>
                    <Carousel.Item>
						<img
							className="d-block w-100 Banner_images"
							src={Oz}
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
		);
	}
}

export default Banners;
