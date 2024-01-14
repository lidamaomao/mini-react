// v1
// const dom = document.createElement("div");
// dom.id = "app";
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";
// dom.appendChild(textNode);

// v2 react->vdom-> js object

// object -> type props children
// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };

// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

import ReactDom from "./core/ReactDom.js";
import React from "./core/React.js";

// const App = React.createElement("div", { id: "app" }, "hello ", "mini-react");
const App = <div id="app">hello mini-react</div>;
// render(App, document.getElementById("root"));

ReactDom.createRoot(document.getElementById("root")).render(App);
