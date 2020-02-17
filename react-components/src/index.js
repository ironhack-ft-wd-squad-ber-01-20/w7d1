import React from "react";
import ReactDOM from "react-dom";

// const Heading = () => {
//   return <h1>React Components</h1>;
// };

class Heading extends React.Component {
  render() {
    return <h1>React Components</h1>;
  }
}

const App = () => {
  return (
    <div>
      <Heading />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
