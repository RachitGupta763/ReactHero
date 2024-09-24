import React, { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { Link } from "react-router-dom";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // Episode 06 - Search functionality 
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    // Episode 06 - useEffect hook
    // About UseEffect Hook
    /*
      ->if no dependencies in UseEffect hook ,useEffect will render as many time as component render.
      ->if dependencies are empty = [] ,useEffect will called at once when inital component render.
      ->if there is dependencies = [btnName] , it will render as many times as btnName called.
    */

    useEffect(() => {
        getRestaurants();
    }, []);

    // Episode 06 -  fetch API data
    const getRestaurants = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
       //console.log(json)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return(
            <div>
               <h1>Looks like you are offline ! 📡</h1>
            </div>
        )
    return listOfRestaurants.length===0 ? (<Shimmer />) : (
        <div className="body">
            <div  className="flex items-center justify-center m-4 p-4 gap-20">
                <div  className="flex m-4 p-4 gap-4 ">
                    {/* Episode 06 - Search functionality  */}
                    <input type="text"
                        className=" rounded-sm px-6 py-2 shadow-sm shadow-black"
                        //Binding the input to searchbtn
                        value={searchText}
                        //getting text(value) from input box from normal event handler
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button className="font-bold rounded-md bg-slate-200 px-6 py-2 text-xl"
                        onClick={() => {
                            console.log(searchText)
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant)
                        }}
                    >Search</button>
                </div>
                <div className="font-bold rounded-md bg-slate-200 px-6 py-2 text-xl">
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurant(filteredList);
                }}>Top Rated</button>
                </div>
            </div>
            {/* <div className="search">search</div> */}
            <div className="flex flex-wrap gap-8">
                {/* We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as id */}
                {filteredRestaurant?.map((restaurant) => {
                    return (
                       
                           <Link key={restaurant.info.id} to={"/Restaurant/"+restaurant.info.id}>
                              <RestaurantCard resdata={restaurant.info} />
                           </Link>
                    
                    )
                    /*
                    another method
                    return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                    */

                })}
            </div>
        </div>
    );
};

export default Body;