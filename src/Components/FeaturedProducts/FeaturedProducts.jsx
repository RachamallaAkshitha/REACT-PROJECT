import Slider from "react-slick";

import "./FeaturedProducts.css"
import productsData from "../Products/productsData";

const FeaturedProducts = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        centerMode:true,
        centerPadding:"240px",
        focusOnSelect:true,
    };

    let filterData = productsData.filter(product => product.tag == "featured-product")

    return (
        <>
        <h2 className="main-head">Featured Products</h2>
        <div className="slider-wrapper">
            <Slider {...settings}>
                    {
                        filterData.map(item => (

                            <div className="slide-show">

                                <div className="heading">
                                    <h4>{item.title}</h4>
                                </div>

                                <div className="photo">
                                    <img src={item.images[0]} alt="" />
                                </div>

                                <div className="cost">
                                    <p>₹{item.finalPrice.toLocaleString()}</p>
                                    <span>₹{item.originalPrice.toLocaleString()}</span>
                                </div>

                            </div>
                        ))
                    }
            </Slider>
        </div>
        </>
    );
};

export default FeaturedProducts;
