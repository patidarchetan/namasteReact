import React from "react";
import ReactDOM from "react-dom/client";
////////////////////Lecture3///////////////////////////////
// //React Element
// const jsxHeading = (
//   <h1 className="head">
//     Hello world
//   </h1>
// );

// const elem = <span>Hello</span>
// const Title = () => (
//   <div>
//   {elem}
//     <h1>Chetan here</h1>
//   </div>
// )

// const Title2 = () => (
//   <div>
//   <Title />
//     <h1>Patidar</h1>;
//   </div>
// )

// //React Component
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// root.render(<Title2/>)

const header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "H1"),
  React.createElement("h2", {}, "H2"),
  React.createElement("h3", {}, "H3"),
]);

const headerJsx = (
  <div id="class">
    <h1>"H1"</h1>
    <h2>"H2</h2>
    <h3>"H3</h3>
  </div>
)


const HeaderJsx = () => (
  <div className = "title">
    <h1>"H1"</h1>
    <h2>"h2"</h2>
    <h3>"h3"</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderJsx />);

//////////////////////////////lecture 3/////////////////////////////