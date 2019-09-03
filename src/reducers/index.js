const loadUsersDefaultState = {
  isLoading: true,
  users: [],
  error: ""
};

export const loadUsersReducer = (state = loadUsersDefaultState, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_USERS_INFO":
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    case "API_ERROR":
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

const handleClickDefaultState = {
  clicked: undefined
};

export const handleClickReducer = (state = handleClickDefaultState, action) => {
  switch (action.type) {
    case "CLICKED":
      return {
        ...state,
        clicked: action.payload
      };

    default:
      return state;
  }
};

const searchUserDefaultState = {
  input: "",
  searchResult: {},
  isSearchResultLoading: true,
  typeAheadSuggestions: []
};

export const searchUserReducer = (state = searchUserDefaultState, action) => {
  switch (action.type) {
    case "SET_SEARCH_INPUT":
      return {
        ...state,
        input: action.payload
      };
    case "IS_SEARCH_RESULT_LOADING":
      return {
        ...state,
        isSearchResultLoading: action.payload
      };
    case "SEARCH_USER":
      return {
        ...state,
        searchResult: action.payload,
        isSearchResultLoading: false,
        input: ""
      };
      case "TYPEAHEAD_SUGGESTIONS":
        return {
          ...state,
          typeAheadSuggestions: action.payload
        };
    default:
      return state;
  }
};
