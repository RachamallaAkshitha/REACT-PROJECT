import { useMemo } from "react"

import { Link } from "react-router-dom"
import "./RelatedProducts.css"
import productsData from "../Products/productsData"
import { ADDTOCART } from "../Redux/CartSlice"
import { useDispatch } from "react-redux"

export const RelatedProducts = ({ currentProduct }) => {
    
    let dispatch=useDispatch();

    // Filter
    const filterData = productsData.filter(
        item => item.category === currentProduct.category)

    const RelatedProducts = filterData.slice(0, 4);


    return (
        <>

            <div className="heading">
                <h2>Related Products</h2>
            </div>

            <div className="container px-0">
                <div className="row g-4 mx-0">
                    {
                        RelatedProducts.map(card => (
                            <div className="col-3" key={card.id}>

                                <div className="card">
                                    <Link
                                        className="product-link"
                                        to={`/product-details/${card.id}`}>


                                        <div className="card-image">
                                            <img src={card.images[0]} alt="" />
                                        </div>
                                    </Link>

                                    <div className="card-body">

                                        <div className="rating">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <i
                                                    key={index}
                                                    className={
                                                        index < card.rateCount
                                                            ? "fa-solid fa-star"
                                                            : ""
                                                    }
                                                ></i>
                                            ))}
                                        </div>

                                        <h4>{card.title}</h4>
                                        <p>{card.info}</p>
                                        <hr />
                                        <div className="card-price">
                                            <p>₹{card.finalPrice.toLocaleString()}</p>
                                            <span>₹{card.originalPrice.toLocaleString()}</span>
                                        </div>
                                        <br />
                                        <button onClick={()=>dispatch(ADDTOCART({...card,quantity:1}))}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


