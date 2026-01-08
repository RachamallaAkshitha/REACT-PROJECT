import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import productsData from "../Products/productsData";



const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  let filterData = productsData.filter(product => product.tag == "hero-product")

  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          {
            filterData.map(item => (
              <div className="slide">

                <div className="bg-text">
                <h1>{item.type}</h1>
                </div>

                <div key={item.id} className="info">

                  <div className="title">
                    <h3>{item.title}</h3>
                  </div>

                  <div className="tagline">
                    <h1>{item.tagline}</h1>
                  </div>

                  <div className="price">
                    <p>₹{item.finalPrice.toLocaleString()}</p>
                    <span>₹{item.originalPrice.toLocaleString()}</span>
                  </div>

                  <div className="butn">
                    <button>Shop Now</button>
                  </div>

                </div>


                <div className="image">
                  <img src={item.heroImage} alt="" />
                </div>  
              </div>
            ))
          }
        </Slider>
      </div>
    </>
  );
};

export default Carousel;

