import React, { Component } from "react";

export class StatefulStatelessComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Habib",
    };
  }
  render() {
    return (
      <div>
        <h1> {this.state.name} </h1>
        <h2>{this.props.age}</h2>
      </div>
    );
  }
}

export default StatefulStatelessComponents;
