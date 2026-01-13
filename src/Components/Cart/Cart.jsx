import { useDispatch, useSelector } from "react-redux"
import "./Cart.css"
import { RiDeleteBinLine } from "react-icons/ri";


export const Cart = () => {
    let cartData = useSelector(state => state.cart)
    const dispatch = useDispatch()
    // console.log(cartData);

    let totalOriginalPrice = cartData.reduce(
        (total, item) => total + item.originalPrice * item.quantity,
        0
    );

    let totalDiscount = cartData.reduce(
        (total, item) => total + (item.originalPrice - item.finalPrice) * item.quantity,
        0
    );


    return (

        <>
            <div className="cart-container py-5">

                {cartData.length === 0 && <h4>Cart is empty</h4>}
                <div className="cart-layout">
                    <div className="cart-products">

                        {
                            cartData.map(card => (


                                <div className="products" key={card.id}>

                                    <div className="card-image">
                                        <img src={card.images[0]} alt="" />
                                    </div>

                                    <div className="card-details">


                                        <div className="cart-header">
                                            <h6>{card.title}{card.info}</h6>

                                        </div>

                                        <div className="card-price">
                                            <p>₹{card.finalPrice.toLocaleString()}</p>
                                            <span>₹{card.originalPrice.toLocaleString()}</span>
                                        </div>

                                        <div className="quantity-controls">
                                            <button>-</button>
                                            <span>{card.quantity}</span>
                                            <button>+</button>
                                        </div>

                                        <hr />

                                    </div>

                                    <div className="delete">
                                        <RiDeleteBinLine />

                                    </div>


                                </div>

                            ))
                        }
                    </div>

                    <div className="order">
                        <div className="order-heading">
                            <h4>Order Summary  ( {cartData.length} items)</h4>
                        </div>

                        <div className="summary">
                            <div className="pricing">
                                <p>Original Price</p>
                                <p style={{fontWeight:"900"}}>₹{totalOriginalPrice.toLocaleString()}</p>
                            </div>

                            <div className="pricing">
                                <p>Discount</p>
                                <span> - ₹{totalDiscount.toLocaleString()}</span>
                            </div>

                            <div className="pricing">
                                <p>Delivery</p>
                                <span>Free</span>
                            </div>
                        </div>

                        <hr />

                        <div className="total-price">
                            <h4>Total Price</h4>
                            <h4>{totalOriginalPrice-totalDiscount}</h4>

                        </div>

                        <button>
                            Checkout
                        </button>

                    
                    </div>

                </div>
            </div>



        </>
    )
}