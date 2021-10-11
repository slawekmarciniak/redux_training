import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/containers/Posts";
import rootReducer from "./RootReducer";
import "./styles.css";
import Appbar from "./ui/containers/Appbar";
import Users from "./users/containers/Users";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ui", "counter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
  persistedReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Appbar />
            <CounterContainer />
            <Posts />
            <Users />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}
