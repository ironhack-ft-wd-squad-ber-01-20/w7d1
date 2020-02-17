import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

// const Heading = props => {
//   return <h1>{props.children}</h1>;
// };

class Heading extends React.Component {
  render() {
    // console.log(this.props.children); // props is the name of the property
    return <h1>{this.props.children}</h1>;
  }
}

const Foo = props => {
  return <span></span>;
};

const Greeting = props => {
  return (
    <p>
      <Foo person={props.person} />{" "}
      {/* props are not automatically propagated down and we have to explicitly do so */}
      {props.greeting} {props.person?.firstName} {props.person?.lastName}
    </p>
  );
};

const App = () => {
  const obj = {
    firstName: "John",
    lastName: "Doe"
  };

  return (
    <div>
      <Navbar />
      <Heading>React Components</Heading>
      <Heading>React Props</Heading>

      <Greeting greeting="Hello" person={obj} />
      <Greeting
        greeting="Bonjour"
        person={{
          firstName: "Foo",
          lastName: "Bar"
        }}
      />
      <Greeting greeting="Hola" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
