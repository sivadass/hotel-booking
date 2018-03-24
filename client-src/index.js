import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

class App extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
