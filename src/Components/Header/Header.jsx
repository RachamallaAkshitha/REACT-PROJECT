import "./Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsData from "../Products/productsData";
import { dropdownMenu } from "./HeaderData";

import { useSelector } from "react-redux";

export const Header = ({ openAuthModal }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();


   const count = useSelector((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );


  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (product) => {
    setQuery("");
    setShowSearch(false);
    navigate(`${product.path}${product.id}`);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Tech-Shop</h1>
      </div>

      {showSearch && (
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <i
            className="fa-solid fa-xmark close"
            onClick={() => {
              setShowSearch(false);
              setQuery("");
            }}
          ></i>

          {query && (
            <div className="search-dropdown">
              {filteredProducts.length ? (
                filteredProducts.map(product => (
                  <p key={product.id} onClick={() => handleSelect(product)}>
                    {product.title}
                  </p>
                ))
              ) : (
                <p className="no-result">No products found</p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="icons">
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => setShowSearch(true)}
          title="search"
        ></i>

        {/* ONLY cart navigates */}
        <Link className="headerLinks" to="/cart">
          <i className="fa-solid fa-cart-shopping" id='cart-icon'
          title="cart"></i>
          {count > 0 && (
    <sup className="cart-count">{count}</sup>
  )}
        </Link>

        {/* Profile */}
        <div className="profile-wrapper">
          <i
            className="fa-regular fa-user headerLinks"
            onClick={() => setShowProfile(!showProfile)}
          ></i>

          {showProfile && (
            <div className="profile-dropdown">
              <p className="title">Hello!</p>
              <span className="subtitle">
                Access account and manage orders
              </span>

              <button
                className="login-btn"
                onClick={() => {
                  setShowProfile(false);
                  openAuthModal("signup");
                }}
              >
                Login / Signup
              </button>
              {<hr/>}

              {dropdownMenu.map(item => (
                <p key={item.id} className="dropdown-link">
                  {item.link}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};









































// import "./Header.css";
// import { Link } from "react-router-dom";

// export const Header = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h1>Tech-Shop</h1>
//       </div>

//       <div className="icons">
//         <Link className='search' to=''><i className="fa-solid fa-magnifying-glass"></i></Link>

       
//           <Link className='cart' to='/Cart'><i className="fa-solid fa-cart-shopping"></i></Link>

//         <Link className='profile' to=''><i className="fa-regular fa-user"></i></Link>
//       </div>
//     </nav>
//   );
// };
