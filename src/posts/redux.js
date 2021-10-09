const FETCH_POSTS_REQUESTED = "posts/FETCH_POSTS_REQUESTED";
const FETCH_POSTS_SUCCEDED = "posts/FETCH_POSTS_SUCCEDED";
const FETCH_POSTS_FAILED = "posts/FETCH_POSTS_FAILED";

const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_POSTS_REQUESTED });
const fetchSucceded = (data) => ({ type: FETCH_POSTS_SUCCEDED, payload: data });
const fetchFailed = () => ({ type: FETCH_POSTS_FAILED });

export const fetchPosts = () => {
  return function (displatch) {
    displatch(fetchRequested());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        displatch(fetchSucceded(data.slice(0, 5)));
      })
      .catch((error) => {
        displatch(fetchFailed());
      });
  };
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return (state = {
        ...state,
        isLoading: true,
        isError: false,
      });
    case FETCH_POSTS_SUCCEDED:
      return (state = {
        ...state,
        posts: action.payload,
        isLoading: false,
        isError: false,
      });
    case FETCH_POSTS_FAILED:
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
      });

    default:
      return state;
  }
}
