import React from "react";
import { connect } from "react-redux";
import { clickedButton } from "../actions";

const AllUsers = props => {
  const buttonClass = props.clicked === undefined ? "active" : "";
  return (
    <button
      id="all"
      className={buttonClass}
      onClick={() => props.clickedButton(undefined)}
    >
      All
    </button>
  );
};

const mapStateToProps = state => {
  return {
    clicked: state.handleClick.clicked
  };
};

export default connect(
  mapStateToProps,
  { clickedButton }
)(AllUsers);
