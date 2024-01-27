import React,{useRef} from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const AppleSlider = () => {

  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
		
  infinite: false,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
	};

  return (
	<>

<Slider {...settings} className='apple_slider' ref={sliderRef}> 
      {/* Your slides go here */}
      <div className="" name='void'></div>

	<div className="apple-card" id='first_card'>
		<div className="apple-subtitle">Getting started</div>
		<div className="apple-title">Easy to use easy to love</div>
	</div>

	<div className="apple-card" id='second_card'>
		<div className="apple-subtitle">Getting started</div>
		<div className="apple-title">Easy to use easy to love</div>
	</div>

	<div className="apple-card" id='third_card'>
		<div className="apple-subtitle">Getting started</div>
		<div className="apple-title">Easy to use easy to love</div>
	</div>

	<div className="apple-card" id='fourth_card'>
		<div className="apple-subtitle">Getting started</div>
		<div className="apple-title">Easy to use easy to love</div>
	</div>

	<div className="apple-card" id='fifth_card'>
		<div className="apple-subtitle">Getting started</div>
		<div className="apple-title">Easy to use easy to love</div>
	</div>

	  <div className="" name='voide'></div>
      {/* Add more slides as needed */}

	  
    </Slider>
	<div className='next_prev_block'>
	{/* Custom navigation arrows */}
	<button className='next_prev_arrow' onClick={goToPrevSlide}><img src="https://cdn-icons-png.flaticon.com/128/6423/6423874.png" alt="" /></button>
	<button className='next_prev_arrow' onClick={goToNextSlide}><img src="https://cdn-icons-png.flaticon.com/128/2722/2722985.png" alt="" /></button>
  </div>


	</>
	
  )
}

export default AppleSlider