const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEDED = "users/FETCH_USERS_SUCCEDED";
const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
const fetchSucceded = (data) => ({
  type: FETCH_USERS_SUCCEDED,
  playload: data,
});
const fetchFailed = () => ({ type: FETCH_USERS_FAILED });

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchRequested());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSucceded(data.slice(0, 5)));
      })
      .catch((error) => fetchFailed());
  };
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return (state = {
        ...state,
        isLoading: true,
        isError: false,
      });
    case FETCH_USERS_SUCCEDED:
      return (state = {
        ...state,
        users: action.playload,
        isLoading: false,
        isError: false,
      });
    case FETCH_USERS_FAILED:
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
      });
    default:
      return state;
  }
}
