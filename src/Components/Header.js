import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
    const [reactBtnName, setReactBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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