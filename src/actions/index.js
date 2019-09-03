import userInfo from "../api/twitchTV";
import getUsersInfo from "../helpers/getUsersInfo";
import typeAheadMatches from "../helpers/typeAhead_handMade";

export const showSpinner = () => {
  return {
    type: "IS_LOADING",
    payload: true
  };
};

export const getUsersInfoAction = () => async dispatch => {
  const response = await getUsersInfo();
  if (!response.error) {
    dispatch({ type: "GET_USERS_INFO", payload: response });
  } else {
    dispatch({ type: "API_ERROR", payload: response.error });
  }
};

export const clickedButton = clicked => async dispatch => {
  dispatch({ type: "CLICKED", payload: clicked });
  dispatch({ type: "SEARCH_USER", payload: {} });
  dispatch(showSpinner());
  dispatch(getUsersInfoAction());
};

export const setSearchInput = input => {
  return {
    type: "SET_SEARCH_INPUT",
    payload: input
  };
};

export const showSearchSpinner = () => {
  return {
    type: "IS_SEARCH_RESULT_LOADING",
    payload: true
  };
};

export const searchUser = user => async dispatch => {
  dispatch(showSearchSpinner());
  const response = await userInfo(user);
  dispatch({ type: "SEARCH_USER", payload: response });
};


export const typeAheadSearch = wordToSearch =>  dispatch => {
  const suggestions = wordToSearch ? typeAheadMatches(wordToSearch) : [];
  dispatch({ type: "TYPEAHEAD_SUGGESTIONS", payload: suggestions });
};