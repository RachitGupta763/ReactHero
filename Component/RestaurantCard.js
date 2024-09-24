import React from "react";
import { CDN_URL } from "../Utils/Links";

const RestaurantCard = (props) =>{
    const {resdata}=props
    const {name,cloudinaryImageId,
        cuisines,
        costForTwo,
        avgRating
    ,totalRatingsString}=resdata;
    return(
      <div className="w-60 m-6 p-2 border-black shadow-sm rounded-sm bg-slate-100 font-semibold text-[18px]">
        <img className="w-[220px]"
        alt="logo"
        src={CDN_URL+cloudinaryImageId}
                />
           <h4 >{name}</h4>
           
           <h4 >{cuisines.join(",")}</h4>
           <h4>{costForTwo}</h4>
           <h4>{avgRating} Star</h4>
           <h4>{totalRatingsString}</h4>
          
      </div>
    )
}


export default RestaurantCard;