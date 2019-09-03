import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchInput, searchUser, typeAheadSearch } from "../actions";


class SearchBar extends Component {

  componentDidMount() {
    document.body.addEventListener("click", e => {
      // e.stopPropagation();
      if (document.querySelector(".suggestions")) {
        document.querySelector(".suggestions").classList.add("typeAhead");
        document.querySelector(".typeAhead").classList.remove("suggestions");
        // document.getElementById('typeAheadOptions').classList.add("typeAhead")
      }
    });
  }


  onFormSubmit = event => {
    event.preventDefault();
    this.props.searchUser(this.props.input);
  };

  handleInput = event => {
    this.props.setSearchInput(event.target.value);
    this.props.typeAheadSearch(event.target.value);

    /*

    Another way to get data from a form
    
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData

    // https://stackoverflow.com/questions/7752188/formdata-appendkey-value-is-not-working/14092429#14092429

    // https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery

    const form = document.querySelector(".form");
    if (form) {
    let formData = new FormData(form);
    formData = Array.from(formData.entries()); // one of the ways to get data from a form
          }
          
    */
  };

  renderTypeAheadSuggestions = () => {
    const { typeAheadSuggestions } = this.props;

    if (typeAheadSuggestions) {
      return typeAheadSuggestions.map(user => (
        <li key={user} onClick={this.chooseSuggestion}>
          {user}
        </li>
      ));
    }
  };

  chooseSuggestion = e => {
    e.stopPropagation();
    this.props.setSearchInput(e.target.innerHTML);
    this.props.typeAheadSearch();
  };


  render() {
    const typeAheadStyles =
      this.props.typeAheadSuggestions.length > 0 && this.props.searchUser !== ""
        ? "suggestions"
        : "typeAhead";
    return (
      <div id="searchForm">
        <form
          className="form"
          action=""
          name="search"
          onSubmit={this.onFormSubmit}
        >
          <input
            id="searchUser"
            name="search"
            type="search"
            value={this.props.input}
            placeholder="Search TwitchTV user"
            autoComplete="off"
            onChange={this.handleInput}
          />
          <ul className={typeAheadStyles}>
            {this.renderTypeAheadSuggestions()}
          </ul>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.searchUser.input,
    typeAheadSuggestions: state.searchUser.typeAheadSuggestions
  };
};

export default connect(
  mapStateToProps,
  { setSearchInput, searchUser, typeAheadSearch }
)(SearchBar);
