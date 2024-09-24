import { CDN_URL } from "../Utils/Links";

const ItemList = ({items}) => {
    console.log(items);
    return(
      <div>
         {items.map((item) => (
           <div key={item.card.info.id}
           className="p-2 m-2 border-slate-200 border-b-2 flex justify-between">
               <div className="w-9/12 text-left p-2">
                  <span className="text-xl font-bold">{item.card.info.name}</span>
                  <p className="text-xl font-semibold"> ₹ {item.card.info.price? item.card.info.price/100 
                  : item.card.info.defaultPrice/100}</p>
                  <p>{item.card.info.description}</p>

                </div>
               
               <div className="w-3/12">
                 <button className="p-2 mt-[160px] absolute bg-black text-xl rounded-sm  text-white">Add +</button>
                 <img src={CDN_URL+item.card.info.imageId}  className=" w-[200px] h-[200px] "></img>
              
                </div>
               </div>
  
         ))}
      </div>
    );   
};

export default ItemList;

