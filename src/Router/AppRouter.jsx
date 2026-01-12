import { Route, Routes } from "react-router-dom"
import { SingleProduct } from "../Features/ProductsList/SingleProduct"
import { TopProducts } from "../Components/TopProducts/TopProducts"
import Carousel from "../Components/Carousel/Carousel"
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts"
import { Advantages } from "../Components/Advantages/Advantages"

export const AppRouter = () => {



    return (
        <Routes>
            <Route path="/" element={
                <>
                <Carousel/>
                <FeaturedProducts/>
                <TopProducts/>
                <Advantages/>
                </>
            }
            />
            
            <Route path="product-details/:id" element={<SingleProduct />} />
        </Routes>
    )
}