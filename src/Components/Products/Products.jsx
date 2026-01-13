import { useMemo, useState } from "react";
import "./Products.css";
import productsData from "../Products/productsData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../Redux/CartSlice";
import FilterBar from "./FilterBar";


export const Products = () => {

  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const clearFilters = () => {
    setSortBy("");
    setSelectedBrands([]);
    setSelectedCategories([]);
  };

  const filteredProducts = useMemo(() => {
    let data = [...productsData];

    if (selectedBrands.length > 0) {
      data = data.filter(p =>
        selectedBrands.includes(p.brand)
      );
    }

    if (selectedCategories.length > 0) {
      data = data.filter(p =>
        selectedCategories.includes(p.category)
      );
    }

    switch (sortBy) {
      case "Price(Lowest First)":
        data.sort((a, b) => a.finalPrice - b.finalPrice);
        break;

      case "Price(Highest First)":
        data.sort((a, b) => b.finalPrice - a.finalPrice);
        break;

      case "Top Rated":
        data.sort((a, b) => b.ratings - a.ratings);
        break;

      case "Latest":
        data.sort((a, b) => b.id - a.id);
        break;

      default:
        break;
    }

    return data;
  }, [sortBy, selectedBrands, selectedCategories]);

  return (
    <div className="products-page">

      {/* LEFT FILTER BAR */}
      <FilterBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        clearFilters={clearFilters}
      />

      {/* RIGHT PRODUCTS */}
      <div className="container px-0">
        <div className="row g-4 mx-0">

          {filteredProducts.map(card => (
            <div className="col-3" key={card.id}>
              <div className="card">

                <Link
                  className="product-link"
                  to={`/product-details/${card.id}`}
                >
                  <div className="card-image">
                    <img src={card.images[0]} alt={card.title} />
                  </div>
                </Link>

                <div className="card-body">
                  <h4>{card.title}</h4>
                  <p>{card.info}</p>
                  <hr />

                  <div className="card-price">
                    <p>₹{card.finalPrice.toLocaleString()}</p>
                    <span>
                      ₹{card.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      dispatch(ADDTOCART({ ...card, quantity: 1 }))
                    }
                  >
                    Add to cart
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};
