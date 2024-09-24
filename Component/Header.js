import { useState } from "react";
import { LogoHeader } from "../Utils/Links";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact,setBtnNameReact]= useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex flex-wrap justify-between shadow-md shadow-black m-4">
            <div className="w-[180px] h-[180px]">
                <img className="Logo"
                src={LogoHeader}
                />
            </div>
            <div >
                <ul className="flex flex-wrap justify-center items-center mt-10 m-8 p-1 text-2xl font-bold">
                <li className="m-4 p-4">Online Status : {onlineStatus ? "🟢" : " 🔴"}</li>   
                <li className="m-4 p-4">
                    <Link to="/">Home </Link>
                </li>
                <li className="m-4 p-4">
                    <Link to="/Grocery">Grocery</Link>
                </li>
                <li className="m-4 p-4">
                   <Link to="/About">About Us</Link>
                   </li>
                <li className="m-4 p-4">
                  <Link to="/Contact">Contact Us</Link>
                </li>
                <li className="m-4 p-4">Cart</li>
                <button className="btnLogin" onClick={() =>{
                    btnNameReact==="Login"?setBtnNameReact("LogOut"):setBtnNameReact("Login")
                }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );

};
export default Header;