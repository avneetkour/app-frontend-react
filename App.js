import ReactDOM from "react-dom/client";
import React from "react";
// const heading = React.createElement( "h1", {id: "heading", xyz:"abc"}, "Hellow world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);


// to create a nested react element
const parent = React.createElement( "div", {id: "parent"},
     React.createElement( "div", {id: "child"},  [
        React.createElement( "h1", {}, "Hye, I am a H1 tag"), 
        React.createElement( "h2", {}, "Hye, I am a H2 tag")
    ]
     ) 
    );
root.render(parent);    