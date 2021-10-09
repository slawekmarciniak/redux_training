import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/containers/Posts";
import rootReducer from "./RootReducer";
import "./styles.css";
import Users from "./users/containers/Users";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <CounterContainer />
          <Posts />
          <Users />
        </Provider>
      </div>
    );
  }
}
