import { useMemo, useState } from "react"

import "./TopProducts.css"
import productsData from "../../Products/productsData"

export const TopProducts = () => {

    const Categories = [
        'All',
        ... new Set(productsData.map(item => (item.category)))

    ]
    const [activeCategory, setActiveCategory] = useState("All")

    const rating = productsData.map(item => item.rateCount) * '*;'

    const limitedProducts = productsData.slice(0, 11);

    // Filter
    const filterData = useMemo(() => {
        if (activeCategory === "All") {
            return limitedProducts;
        }

        return productsData.filter(
            item => item.category === activeCategory
        );
    }, [activeCategory, limitedProducts]);


    return (
        <>
            <div className="heading">
                <h2>Top Products</h2>
            </div>
            <div className="categories">
                {
                    Categories.map(cat => (
                        <button
                            onClick={() => setActiveCategory(cat)}
                            className={activeCategory == cat ? "active" : ""}
                        >{cat}</button>
                    ))
                }
            </div>
            <div className="container px-0">
                <div className="row g-4 mx-0">
                    {
                        filterData.map(card => (
                            <div className="col-3" key={card.id}>
                                <div className="card">

                                    <div className="card-image">
                                        <img src={card.images[0]} alt="" />
                                    </div>

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
                                        <button>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className="col-3">
                        <div className="browse">
                            <h4>
                                Browse All <br /> Products <i className="fa-solid fa-arrow-right"></i>
                            </h4>
                        </div>
                    </div>
                </div>

            </div >


        </>
    )
}