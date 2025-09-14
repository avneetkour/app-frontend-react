import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [reactBtnName, setReactBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={
                        () => {
                            reactBtnName === "Login" ? setReactBtnName("Logout") : setReactBtnName("Login");
                        }
                    }>{reactBtnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;