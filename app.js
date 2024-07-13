import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * ->Logo
 * ->Nav Section
 * Body
 * ->Search Bar
 * ->Restaurant Items/Cards
 *   ->image
 *   ->name of res,dish,rating,price
 * Footer
 * ->Contact
 * ->DisClaimer
 */
const Header = () => {
    return (
        <div className="header">
            <div className="Logo-Container">
                <img className="Logo"
                src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-1536x1536.png"
                />
            </div>
            <div className="nav-item">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    );

};
const RestaurantCard = () =>{
    return(
      <div className="ResCard">
        <img className="ResImg"
                src="https://th.bing.com/th?q=Balushahi+Top+View&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                />
           <h3>Hatras BaluSahi</h3>
           <h4>Sweet Indian</h4>
           <h4>RS. 60</h4>
           <h4>4.5 STAR</h4>
      </div>
    )
}
const Body = () => {
    return(
        <div className="Body">
            <div className="Search">
                Search
            </div>
            <div className="Res-Container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>

        </div>
    )
}
const AppLayout = () =>{
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// //using core react fundamental
// const heading = React.createElement("h1",{id:"heading"},"Namaste React");
// console.log(heading);


// //Now using Jsx
// const JSXheading=(<h1 className="heading1">My name is Rachit Gupta</h1>);
// console.log(JSXheading);

// //creating react funtional component with return function
// // component have initial letter capital 

// const add=200+400;
// const Title = () =>{
//     return(
//         <div id="heading 1">
//             {add};
//             <h1>This is return functional component</h1>
//         </div>
//     )
// }
// // component Composition-> component inside another component
// // {} ->this is use to write js inside component
// const MainHeading =() => (
//     <div id="heading 2">
//      <Title /> 
//      {Title()}
//     <h1>This is without return functional component</h1>
//     </div>
// );


