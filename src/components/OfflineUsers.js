import React from "react";
import { connect } from "react-redux";
import { clickedButton } from "../actions";

const OfflineUsers = ({ clicked, clickedButton }) => {
  const buttonClass = clicked === false ? "active" : "";
  return (
    <button id="offline" className={buttonClass} onClick={() => clickedButton(false)}>
      Offline
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
)(OfflineUsers);
