import React from "react";
import "../css/rooms.css";
import axios from "axios";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }
  componentDidMount() {
    this.getRooms();
  }
  getRooms() {
    axios.get("/api/rooms").then(res => {
      this.setState({
        rooms: res.data
      });
    });
  }
  render() {
    let renderRooms = this.state.rooms.map(item => {
      return (
        <div className="room-item" key="item.id">
          {item.bed} beds at {item.price}
        </div>
      );
    });
    return (
      <div className="container">
        <p>Available Rooms</p>
        {this.state.rooms.length > 0 ? renderRooms : "Loading..."}
      </div>
    );
  }
}

export default Rooms;
