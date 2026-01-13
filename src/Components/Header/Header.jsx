import { Link } from "react-router-dom"
import "./Header.css"
export const Header = () => {


    return (
        <>
            <nav className="header">
                <div>
                    <h1>Tech-Shop</h1>
                </div>
                <div className="icons">

                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass me-3" title="Search"></i>
                    </div>

                    <div className="cart">
                        <Link className="nav-link" to="/Cart">
                            <i className="fa-solid fa-cart-shopping me-3"></i>
                        </Link> 
                    </div>

                    <i className="fa-regular fa-user "></i>

                </div>
            </nav>
        </>
    )
}