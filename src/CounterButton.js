import React from "react";
import { connect } from "react-redux";
import "./App.css";

function CounterButton({ onIncreaseClick, onDecreaseClick, onResetClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        className="btn"
        onClick={() => onIncreaseClick()}
        style={{ marginBottom: "2px" }}
      >
        Increase
      </button>
      <button
        className="btn"
        onClick={() => onDecreaseClick()}
        style={{ marginBottom: "2px" }}
      >
        Decrease
      </button>
      <button
        className="btn"
        onClick={() => onResetClick()}
        style={{ marginBottom: "2px" }}
      >
        Reset
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function () {
      dispatch({ type: "increase" });
    },
    onDecreaseClick: function () {
      dispatch({ type: "decrease" });
    },
    onResetClick: function () {
      dispatch({ type: "reset" });
    },
  };
}

export default connect(null, mapDispatchToProps)(CounterButton);
