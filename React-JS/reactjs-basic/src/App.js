import React, { Component } from "react";
import Ezhealth from "./Ezhealth";
import AddEz from "./AddEz";
class App extends Component {
  state = {
    ezhealth: [
      { name: "A", age: "25", id: 1 },
      { name: "C", age: "29", id: 2 },
      { name: "E", age: "21", id: 3 },
      { name: "D", age: "35", id: 4 },
    ],
  };
  addEz = (ez) => {
    // console.log(ez);
    ez.id = Math.random();
    let ezhealth = [...this.state.ezhealth, ez];
    this.setState({
      ezhealth: ezhealth,
    });
  };
  deleteNinja = (id) => {
    let ezhealth = this.state.ezhealth.filter((ez) => {
      return ez.id !== id;
    });
    this.setState({
      ezhealth: ezhealth,
    });
  };
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Wellcome</p>
        <Ezhealth
          deleteNinja={this.deleteNinja}
          ezhealth={this.state.ezhealth}
        />
        <AddEz addEzhealth={this.addEz} />
      </div>
    );
  }
}

export default App;
