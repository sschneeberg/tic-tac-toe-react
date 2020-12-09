import React from "react";
import "../index.css";

class Square extends React.Component {
  //initialized state
  constructor(props) {
    //always call super(props) for components with a constructor function
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" });
        }}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
