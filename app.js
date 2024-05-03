const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hello World H1 Tag"),
        React.createElement("h2",{},"Hello World H2 Tag")
    ]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Hello World H1 Tag"),
        React.createElement("h2",{},"Hello World H2 Tag")
    ]
    )
]
);

const heading = React.createElement("h1",{},"Hello World");
console.log(heading);
const root = document.getElementById("root");
console.log(root);

ReactDOM.render(parent, root);