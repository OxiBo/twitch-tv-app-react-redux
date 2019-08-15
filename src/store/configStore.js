import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { loadUsersReducer, handleClickReducer, searchUserReducer } from "../reducers";

export default () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      loadUsers: loadUsersReducer,
      handleClick: handleClickReducer, 
      searchUser: searchUserReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
