import { useParams } from "react-router-dom";
import productsData from "../../Components/Products/productsData"
import "./SingleProduct.css"
import { useState } from "react";

export const SingleProduct = () => {

    const { id } = useParams();

    const product = productsData.find(item => item.id == Number(id))

    if (!product) return <h2 className="text-center mt-5">Loading...</h2>;

    const discount = Math.round(
        ((product.originalPrice - product.finalPrice) / product.originalPrice) * 100
    )

    const [img,setImg] =useState(product.images[0])

    return (
        <>
            <div className="product-details">
                <div className="product-images">

                    <div className="image-1" onClick={()=>setImg(product.images[0])}>
                        <img src={product.images[0]} alt="" />
                    </div>

                    <div className="image-2" onClick={()=>setImg(product.images[1])}>
                        <img src={product.images[1]} alt="" />
                    </div>

                    <div className="image-3" onClick={()=>setImg(product.images[2])}>
                        <img src={product.images[2]} alt="" />
                    </div>

                    <div className="images-4" onClick={()=>setImg(product.images[3])}>
                        <img src={product.images[3]} alt="" />
                    </div>

                </div>

                <div className="main-image">
                    <img src={img} alt="" />
                </div>

                <div className="description">
                    <h3>{product.title}</h3>
                    <p>{product.info}</p>
                    <div className="rating">
                        {Array.from({ length: 5 }, (_, index) => (
                            <i
                                key={index}
                                className={
                                    index < product.rateCount
                                        ? "fa-solid fa-star"
                                        : ""
                                }

                            ></i>

                        ))}

                        <p> | {product.ratings} Ratings</p>

                    </div>

                    <hr />

                    <div className="card-amount">

                        <div className="amount">
                            <div className="price-row">
                                <p>₹{product.finalPrice.toLocaleString()}</p>
                                <span>₹{product.originalPrice.toLocaleString()}</span>
                            </div>
                            <div className="save-row">
                                <p>You save ₹{(product.originalPrice - product.finalPrice).toLocaleString()}</p>

                                <span>({discount}%)</span>
                            </div>
                            <p style={{ color: "#AAAA", margin: "0" }}>(Inclusive of all taxes)</p>

                        </div>

                        <div className="stock">
                            <button className="btn btn-success"><i className="fa-solid fa-check"></i>
                                In Stock</button>
                        </div>

                    </div>

                    <hr />

                    <div className="offers">
                        <h5>Offers and Discounts</h5>
                        <div className="buttons">
                            <button>No Cost EMI on Credit  Card</button>
                            <button>Pay Later & Avail Cashback</button>
                        </div>
                    </div>

                    <hr />

                    <button className="btn btn-danger" style={{padding:"5px 40px",borderRadius:"3px"}}>Add to Cart</button>






                </div>
            </div>

        </>
    )
}