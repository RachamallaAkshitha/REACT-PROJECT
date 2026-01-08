import { footMenu } from "./FooterData"
import { footSocial } from "./FooterData"
import "./Footer.css"
export const Footer = () => {


    return (
        <>
            <div className="footer">
                    <div className="subscribe">
                        <h1>Tech-Shop</h1>
                        <p>Subscribe to our Email alerts to receive <br />
                            early discount offers, and new products <br />
                            info.</p>
                        <input type="email" placeholder="Email Address*" className="footer-email-input"/><br />
                        <button className="btn">Subscribe</button>
                    </div>
                    {
                        footMenu.map(item => (
                            <div key={item.id} className="about">
                                <h3>{item.title}</h3>
                                <ul>
                                    {
                                        item.menu.map(subitem => (
                                                <li key={subitem.id}>{subitem.link}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
            </div>
            <hr />
            <div className="desc">
                <div>
                    <p>2025|All Rights Reserved ©.</p>
                </div>
                <div className="icons">
                {
                    footSocial.map(item=>(
                       <div key={item.id}>
                        <i>{item.icon}</i>
                        </div>
                    ))
                }
                </div>
            </div>

        </>
    )
}