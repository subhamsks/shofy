import React from "react"
import Sdata from "./SliderHome_data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import './home.css'


const SlideCard = () => {
    // var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // appenddots: (dots) => {
    //     return <ul style={{margin: "10px"}}>{dots}</ul>
    // }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const leftArrowStyles = {
      position: "absolute",
      top: "50%",
      tranform: "translate(0,-50%)",
      left:"32px",
      fontsize: "45px",
      color:"#fff",
      zIndex:1,
      cursor:"pointer",
    };

    const rightArrowStyles = {
      position: "absolute",
      top: "50%",
      tranform: "translate(0,-50%)",
      left:"32px",
      fontsize: "45px",
      color:"#fff",
      zIndex:1,
      cursor:"pointer",
    };
  
  
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
            <div className="home">
            <div className='box d_flex top' key={index}>
              <div style={leftArrowStyles}></div>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='not found' />
                </div>
                <div style={rightArrowStyles}></div>
              </div>
            </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard