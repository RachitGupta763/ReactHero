import { useParams } from "react-router-dom";
import useApiService from "fetchapiservice";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const {id}=useParams();
    
   
    const resInfo= useApiService( 
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId="+id
        )
    
    if(resInfo===null)
       return  <Shimmer />;    
        
    const {city,name,costForTwoMessage,cuisines}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
                     (c)=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                          );

    //console.log(categories);                      
    
return (
<div className="text-center">
      <h1 className="font-bold text-3xl">{name}</h1>
      <h2>{city}</h2>
      
      <h2 className="font-bold text-l">{costForTwoMessage}</h2>
      <h1 className="font-bold text-2xl">Menu</h1>

      {  categories.map((category) => (
               <RestaurantCategory  key={category.card.card.title} data={category.card.card}></RestaurantCategory>
            ))
        }
    </div>
)

};

export default RestaurantMenu;
/*
   
    */