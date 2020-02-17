// const React = require('react')
// const ReactDOM = require('react-dom')

import React from "react";
import ReactDOM from "react-dom";

import "./stylesheet.css";

const name = "Andre";

const add = (a, b) => a + b;

const nestedElement = <p>Random Number: {parseInt(Math.random() * 10)}</p>;

const gorilla = {
  imgUrl:
    "https://imgs.mongabay.com/wp-content/uploads/sites/20/2019/12/17100814/5-Silverback-mtn-gorilla-Uganda-Skyler-Bishop-for-Gorilla-Doctors-copy-2.jpg",
  name: "Harambe"
};

const styles = {
  height: "100px"
};

const element = (
  <div>
    <h1 className="heading">
      Hello {name.toUpperCase()}! {6 * 7}
    </h1>
    <p
      style={{
        color: "deepskyblue",
        textAlign: "center" // camelCase
      }}
    >
      Sum of 4 and 5 is: {add(4, 5)}
    </p>
    {nestedElement}
    <img src={gorilla.imgUrl} style={styles} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

// ReactDOM.render(
//   React.createElement(
//     "div",
//     null,
//     React.createElement("h1", null, "Hello World 42!")
//   ),
//   document.getElementById("root")
// );
