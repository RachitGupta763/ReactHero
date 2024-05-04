import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hello World H1 Tag"),
        React.createElement("h2",{},"Hello World H2 Tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Hello World H1 Tag"),
        React.createElement("h2",{},"Hello World H2 Tag")
    ]),
]
);


const root =ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);

root.render(parent);