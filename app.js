/*
<div id="parent">
        <div id="child">
         <h1>I'm h1 tag</h1>
        </div>
</div>
*/

// const parent = React.createElement("div",
//   { id: "parent" }, React.createElement("div",
//     { id: "child" }, React.createElement("h1", {}, "I'm h1 tag")
//   )
// );
//                 If want to create siblings..........//
/*
<div id="parent">
        <div id="child">
         <h1>I'm h1 tag</h1>
         <h2>I'm h2 tag</h2>
        </div>
</div>
*/
const parent = React.createElement("div",
   { id: "parent" }, React.createElement("div",
     { id: "child" },[
       React.createElement("h1", {}, "I'm h1 tag"),
       React.createElement("h2", {}, "I'm h2 tag")
     ]
   )
 );
// const heading = React.createElement("h1", { id: "heading" }, "Hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);