import React from "react";
import "../index.css";

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={function () {
          alert("click");
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
