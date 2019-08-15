import React from "react";
import { connect } from "react-redux";
import { clickedButton } from "../actions";

const OnlineUsers = ({ clicked, clickedButton }) => {
  const buttonClass = clicked === true ? "active" : "";
  return (
    <button
      id="online"
      className={buttonClass}
      onClick={() => clickedButton(true)}
    >
      Online
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
)(OnlineUsers);
