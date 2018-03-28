import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    outputs: [
      { testname: "test", subtext: "I hope this will be overwritten." },
      { testname: "test", subtext: "I hope this will be overwritten." },
      { testname: "Daan", subtext: "I hope this will be overwritten." }
    ]
  };

  nameChangedHandler = event => {
    this.setState({
      outputs: [
        {
          testname: event.target.value,
          subtext: "I hope this will be overwritten."
        },
        {
          testname: event.target.value,
          subtext: "I hope this will be overwritten."
        },
        { testname: "Daan", subtext: "I hope this will not be overwritten." }
      ]
    });
  };

  render() {
    const style = {
      width: "60%",
      fontcolor: "white",
      backgroundColor: "grey",
      border: "1px solid #eee",
      margin: "15px auto",
      padding: "8px",
      cursor: "pointer"
    }; // inline stylen in ReactJS
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Practice React</h1>
        </header>
        <UserInput changed={this.nameChangedHandler} />
        <div style={style}>
          <UserOutput
            testname={this.state.outputs[0].testname}
            subtext={this.state.outputs[0].subtext}
          />
        </div>

        <div style={style}>
          <UserOutput
            testname={this.state.outputs[1].testname}
            subtext={this.state.outputs[1].subtext}
          />
        </div>

        <div style={style}>
          <UserOutput
            testname={this.state.outputs[2].testname}
            subtext={this.state.outputs[2].subtext}
          />
        </div>
      </div>
    );
  }
}

export default App;
