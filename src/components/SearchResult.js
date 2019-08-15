import React from "react";
import UserInfo from "./UserInfo";
import { connect } from "react-redux";

const SearchResult = ({ searchResult, isSearchResultLoading }) => {
  return (
    <div>
      {Object.keys(searchResult).length !== 0 &&
        (isSearchResultLoading ? (
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
        ) : searchResult.error ? (
          <div className="container user offline">failed to load information</div>
        ) : (
          <div className="search-result">
            <UserInfo user={searchResult} />
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchResult: state.searchUser.searchResult,
    isSearchResultLoading: state.searchUser.isSearchResultLoading
  };
};

export default connect(mapStateToProps)(SearchResult);
