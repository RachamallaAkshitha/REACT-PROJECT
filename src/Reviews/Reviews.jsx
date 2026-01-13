import reviewsData from "./reviewsData"
import "./Reviews.css"
import { MdPerson } from "react-icons/md";


export const Reviews = () => {


    return (
        <>
            {
                reviewsData.map(reviewsData => (

                    <div className="reviews" key={reviewsData.id}>

                        <div className="reviews-data" >

                            <div className="user-icon">
                                <MdPerson />
                            </div>

                            <div className="user">
                                <h6>{reviewsData.name}</h6>
                                <div className="rating">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i
                                            key={index}
                                            className={
                                                index < reviewsData.rateCount
                                                    ? "fa-solid fa-star"
                                                    : ""
                                            }

                                        ></i>

                                    ))}
                                    <p> | {reviewsData.date}</p>

                                </div>
                            </div>
                        </div>
                        <p>{reviewsData.review}</p>
                    </div>

                ))

            }
        </>

    )
}