import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import imgCarousel from './../../img/apple-ipad-97-2017.jpg';
import imgCarouse2 from './../../img/apple-ipad-97-2018.jpg';
import imgCarouse3 from './../../img/apple-ipad-air-2-new.jpg';
import imgCarouse4 from './../../img/apple-ipad-air.jpg';
import imgCarouse5 from './../../img/apple-ipad-air3-2019.jpg';
import imgCarouse6 from './../../img/apple-ipad-mini-2019.jpg';
import imgCarouse7 from './../../img/apple-ipad-mini-3-new.jpg';
import imgCarouse8 from './../../img/apple-ipad-mini-final.jpg';
import imgCarouse9 from './../../img/apple-ipad-pro-11-2018.jpg';
import imgCarouse10 from './../../img/apple-ipad-pro-129-2018.jpg';
import classes from './MyCarousel.module.css'
// Ressource
// https://www.npmjs.com/package/react-responsive-carousel

const slidesCarousel = [
	{ 
		id: 1,
		uri: imgCarousel,
		label: 'Img 1'
	},
	{ 
		id: 2,
		uri: imgCarouse2,
		label: 'Img 2'
	},
	{ 
		id: 3,
		uri: imgCarouse3,
		label: 'Img 3'
	},
	{ 
		id: 4,
		uri: imgCarouse4,
		label: 'Img 4'
	},
	{ 
		id: 5,
		uri: imgCarouse5,
		label: 'Img 5'
	},
	{ 
		id: 6,
		uri: imgCarouse6,
		label: 'Img 6'
	},
	{ 
		id: 7,
		uri: imgCarouse7,
		label: 'Img 7'
	},
	{ 
		id: 8,
		uri: imgCarouse8,
		label: 'Img 8'
	},
	{ 
		id: 9,
		uri: imgCarouse9,
		label: 'Img 9'
	},
	{ 
		id: 10,
		uri: imgCarouse10,
		label: 'Img 10'
	}

]


const MyCarousel = () => {
	return (
		<div className={classes.customSlideCtn}>
			<Carousel autoPlay centerMode={true}>
				{slidesCarousel.map((slide)=>{
					return (
						<div key={slide.id} style={{height: 400}}>
							<img alt="" src={slide.uri} style={{width: 250}}/>
							<p className="legend">{slide.label}</p>
						</div>
					)
				})}
				{/* <div style={{height: 600}}>
					<img alt="" src={imgCarousel} style={{height: 500 ,width: 300}}/>
					<p className="legend">Legend 1</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse2} />
					<p className="legend">Legend 2</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse3} />
					<p className="legend">Legend 3</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse4} />
					<p className="legend">Legend 4</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse5} />
					<p className="legend">Legend 5</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse6} />
					<p className="legend">Legend 6</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse7} />
					<p className="legend">Legend 7</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse8} />
					<p className="legend">Legend 8</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse9} />
					<p className="legend">Legend 9</p>
				</div>
				<div style={{height: 600}}>
					<img alt="" src={imgCarouse10} />
					<p className="legend">Legend 10</p>
				</div> */}
				
			</Carousel>
		</div>
	)
}
export default MyCarousel;