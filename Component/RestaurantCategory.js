import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
   
    const[showItem,setShowItem]=useState(false);

    const handleClick = () => {
        setShowItem(!showItem)
    } 

    return(
        <div>
        <div className="w-6/12 mx-auto my-4 bg-slate-100 shadow-sm border-black "
        >
          
            <div className="font-bold flex justify-between text-xl m-2 p-4"
            onClick={handleClick}>
               <span>{data.title}({data.itemCards.length})</span>
               <span>🔽</span>
               
            </div>
            
            {showItem && <ItemList items={data.itemCards}/>}
        </div>
       </div>
    )
    
}
export default RestaurantCategory;