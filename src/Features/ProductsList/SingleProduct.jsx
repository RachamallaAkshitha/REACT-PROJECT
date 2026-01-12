import { useParams } from "react-router-dom";
import productsData from "../../Components/Products/productsData"
import "./SingleProduct.css"

export const SingleProduct = () => {

    const { id } = useParams();

    const product = productsData.find(item => item.id == Number(id))

    if (!product) return <h2 className="text-center mt-5">Loading...</h2>;

    return (
        <>
            <div className="product-details">
                <div className="product-images">

                    <div className="image1">
                        <img src={product.images[0]} alt="" />
                    </div>

                    <div className="image-2">
                        <img src={product.images[1]} alt="" />
                    </div>

                    <div className="image-3">
                        <img src={product.images[2]} alt="" />
                    </div>

                    <div className="images-4">
                        <img src={product.images[3]} alt="" />
                    </div>

                </div>

                <div className="main-image">
                    <img src={product.images[0]} alt="" />
                </div>

                <div className="description">
                    <h4>{product.title}</h4>
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

                    </div>

                    <hr />

                    <div className="card-price">
                        <p>₹{product.finalPrice.toLocaleString()}</p>
                        <span>₹{product.originalPrice.toLocaleString()}</span>

                        <div className="stock">
                            <p></p>
                        </div>




                    </div>

                    <hr />

                    <div className="offers">
                        <h6>Offers and Discounts</h6>
                        <button>No Cost EMI on Credit  Card</button>
                        <button>Pay Later & Avail Cashback</button>
                    </div>

                    <hr />

                    <button className="btn btn-danger">Add to Cart</button>






                </div>
            </div>

        </>
    )
}