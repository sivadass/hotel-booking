import React from "react";
import ReactDOM from "react-dom";
import Rooms from "./components/rooms";
import "./css/style.css";

class App extends React.Component {
  render() {
    return <Rooms />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
