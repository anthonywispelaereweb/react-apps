import React from "react";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import imgCarousel from "./../../assets/Apple/apple-ipad-97-2017.jpg";
import imgCarouse2 from "./../../assets/Apple/apple-ipad-97-2018.jpg";
import imgCarouse3 from "./../../assets/Apple/apple-ipad-air-2-new.jpg";
import imgCarouse4 from "./../../assets/Apple/apple-ipad-air.jpg";
import imgCarouse5 from "./../../assets/Apple/apple-ipad-air3-2019.jpg";
import imgCarouse6 from "./../../assets/Apple/apple-ipad-mini-2019.jpg";
import imgCarouse7 from "./../../assets/Apple/apple-ipad-mini-3-new.jpg";
import imgCarouse8 from "./../../assets/Apple/apple-ipad-mini-final.jpg";
import imgCarouse9 from "./../../assets/Apple/apple-ipad-pro-11-2018.jpg";
import imgCarouse10 from "./../../assets/Apple/apple-ipad-pro-129-2018.jpg";
import classes from "./MyCarousel.module.css";
// Ressource
// https://www.npmjs.com/package/react-responsive-carousel

const slidesCarousel = [
  {
    id: 1001,
    uri: imgCarousel,
    label: "Img 1",
  },
  {
    id: 1002,
    uri: imgCarouse2,
    label: "Img 2",
  },
  {
    id: 1003,
    uri: imgCarouse3,
    label: "Img 3",
  },
  {
    id: 1004,
    uri: imgCarouse4,
    label: "Img 4",
  },
  {
    id: 1005,
    uri: imgCarouse5,
    label: "Img 5",
  },
  {
    id: 1006,
    uri: imgCarouse6,
    label: "Img 6",
  },
  {
    id: 1007,
    uri: imgCarouse7,
    label: "Img 7",
  },
  {
    id: 1008,
    uri: imgCarouse8,
    label: "Img 8",
  },
  {
    id: 1009,
    uri: imgCarouse9,
    label: "Img 9",
  },
  {
    id: 1010,
    uri: imgCarouse10,
    label: "Img 10",
  },
];

const MyCarousel = () => {
  const history = useHistory();
  const moreInfoProduct = (event)=> {
    history.replace(`/products/${slidesCarousel[event].id}`);
  }
  return (
    <div className={classes.customSlideCtn}>
      <Carousel autoPlay centerMode={true} infiniteLoop={true} onClickItem={moreInfoProduct}>
        {slidesCarousel.map((slide) => {
          return (
            
            <div key={slide.id} style={{ height: 400 }}>
              <img alt="" src={slide.uri} style={{ width: 250 }} />
              <p className="legend">{slide.label}</p>
            </div>
          );
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
  );
};
export default MyCarousel;
