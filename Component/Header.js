import { useState } from "react";
import { LogoHeader } from "../Utils/Links";

const Header = () => {
    const [btnNameReact,setBtnNameReact]= useState("Login");

    return (
        <div className="header">
            <div className="Logo-Container">
                <img className="Logo"
                src={LogoHeader}
                />
            </div>
            <div className="nav-item">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="btnLogin" onClick={() =>{
                    btnNameReact==="Login"?setBtnNameReact("LogOut"):setBtnNameReact("Login")
                }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );

};
export default Header;