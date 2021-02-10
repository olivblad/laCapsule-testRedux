import React from "react";
import { connect } from "react-redux";
import "./App.css";

function CounterDisplay({ count }) {
  return <h1 className="bigTitle">Compteur : {count}</h1>;
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps, null)(CounterDisplay);
