import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersInfoAction } from "../actions";
import UserInfo from "./UserInfo";

class DisplayUsers extends Component {
  async componentDidMount() {
    this.props.getUsersInfoAction();
  }

  renderUsers = () => {
    return this.props.users.map((user, index) => {
      return <UserInfo user={user} key={index} />;
    });
  };

  render() {
    return (
      <div className="users main-flex-item" id="content">
        {this.props.isLoading ? (
          <div className="spinner">
            <div className="lds-spinner">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        ) : this.props.error ? (
          <div className="container user offline">
            failed to load information
          </div>
        ) : (
          this.renderUsers()
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { clicked } = state.handleClick;
  return {
    users:
      clicked === undefined
        ? state.loadUsers.users
        : state.loadUsers.users.filter(
            user => Boolean(user.stream) === clicked
          ), // // filter all users to show online/offline users and set store values respectively. if stream is undefined, it means that "All" button was clicked
    // clicked: state.handleClick.clicked
    isLoading: state.loadUsers.isLoading,
    error: state.loadUsers.users.filter(user => user.error).length
  }; // filter users information to find out if api call was successful about any of them; if every API call came back with an error display the info to the screen
};
export default connect(
  mapStateToProps,
  { getUsersInfoAction }
)(DisplayUsers);
