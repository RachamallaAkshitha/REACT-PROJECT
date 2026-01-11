
import "./Advantages.css"
import {servicesData} from "./servicesData.jsx";
console.log(servicesData);


export const Advantages = () => {

    return (
        <>
            <div className="adv-head">
                <h2>Our Advantages</h2>
            </div>
            <div className="service-container">
            {
                servicesData.map(service => (
                    <div key={service.id} className="service-details">

                        <div className="icon">
                            {service.icon}
                        </div>

                        <div className="service">
                            <h5>{service.title}</h5>
                            <p>{service.info}</p>
                        </div>

                    </div>

                ))
            }
            </div>
        </>
    )
}