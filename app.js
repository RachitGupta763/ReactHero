import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Component/Body"
import Header from "./Component/Header"

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


