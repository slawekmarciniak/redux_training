import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTopBar } from "../redux";

class Appbar extends Component {
  render() {
    const { showAppBar, toggleTopBar } = this.props;
    console.log(showAppBar);
    return (
      <div className="container">
        <div>
          Show Appbar: {showAppBar ? "Yes" : "No"}{" "}
          <button onClick={toggleTopBar}>Toggle</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showAppBar: state.ui.showAppBar,
  notifications: state.ui.notifications,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTopBar: () => dispatch(toggleTopBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
