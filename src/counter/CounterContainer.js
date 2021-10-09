import React, { Component } from "react";
import { connect } from "react-redux";
import { inc } from "./redux";

class CounterContainer extends Component {
  render() {
    const { counterValue, addValue } = this.props;
    return (
      <div className="container">
        <h2>Counter: {counterValue} </h2>
        <button onClick={() => addValue()}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counterValue: state.counter.counter };
}

function mapDispatchToProps(dispatch) {
  return {
    addValue: () => dispatch(inc()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
