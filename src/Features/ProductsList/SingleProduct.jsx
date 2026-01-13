import { useParams } from "react-router-dom";
import productsData from "../../Components/Products/productsData"
import "./SingleProduct.css"
import { useState } from "react";
import { Reviews } from "../../Reviews/reviews";


export const SingleProduct = () => {

    const { id } = useParams();

    const product = productsData.find(item => item.id == Number(id))

    if (!product) return <h2 className="text-center mt-5">Loading...</h2>;

    const discount = Math.round(
        ((product.originalPrice - product.finalPrice) / product.originalPrice) * 100
    )

    const [img, setImg] = useState(product.images[0])

    const [tab, setActiveTab] = useState("Specifications")



    return (
        <>
            <div className="product-details">
                <div className="product-images">

                    <div className="image-1" onClick={() => setImg(product.images[0])}>
                        <img src={product.images[0]} alt="" />
                    </div>

                    <div className="image-2" onClick={() => setImg(product.images[1])}>
                        <img src={product.images[1]} alt="" />
                    </div>

                    <div className="image-3" onClick={() => setImg(product.images[2])}>
                        <img src={product.images[2]} alt="" />
                    </div>

                    <div className="images-4" onClick={() => setImg(product.images[3])}>
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

                    <button className="btn btn-danger" style={{ padding: "5px 40px", borderRadius: "3px" }}>Add to Cart</button>

                </div>
            </div>

            <div className="details-buttons">
                <button
                    className={tab == "Specifications" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("Specifications")}
                >Specifications</button>

                <button
                    className={tab == "Overviews" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("Overviews")}
                >Overviews</button>

                <button
                    className={tab == "Reviews" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("Reviews")}
                >Reviews</button>

            </div>

            <div className={`tab-content ${tab === "Specifications" ? "show" : ""}`}>
                <div className="Specifications">
                    <div className="specify">
                        <p>Brand</p>
                        <h5>{product.brand}</h5>
                    </div>
                    <div className="specify">
                        <p>Model</p>
                        <h5>{product.title}</h5>
                    </div>
                    <div className="specify">
                        <p>Generic Name</p>
                        <h5>{product.category}</h5>
                    </div>
                    <div className="specify">
                        <p>Headphone Type</p>
                        <h5>{product.type}</h5>
                    </div>
                    <div className="specify">
                        <p>Connectivity</p>
                        <h5>{product.connectivity}</h5>
                    </div>
                    <div className="specify">
                        <p>Microphone</p>
                        <h5>Yes</h5>
                    </div>
                </div>
            </div>


            <div className={`tab-content ${tab === "Overviews" ? "show" : ""}`}>
                <div className="overviews">

                    <h5 >The <span className="product-name">{product.title} </span> {product.connectivity} {product.type} {product.category} provides with fabulous sound quality</h5>
                    <ul>
                        <li>Sound Tuned to Perfection</li>
                        <li>Comfortable to Wear</li>
                        <li>Long Hours Playback Time</li>
                    </ul>
                    <p>Buy the <span style={{ fontWeight: "bold", color: "white" }}>{product.title} {product.connectivity} {product.type} {product.category} </span>which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these Earbuds giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>

                </div>
            </div>


            <div className={`tab-content ${tab === "Reviews" ? "show" : ""}`}>
                <Reviews/>
            </div>

        </>
    )
}