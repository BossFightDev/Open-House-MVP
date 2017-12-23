import React, { Component } from "react";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import { Provider, connect } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import * as Pages from "./Pages";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk";

const Routes = StackNavigator(
  {
    Home: { screen: Pages.Login },
    Signup: { screen: Pages.Signup },
    OpenHouses: { screen: Pages.OpenHouses },
    CreateOpenHouse: { screen: Pages.CreateOpenHouse },
    PastOpenHouses: { screen: Pages.PastOpenHouses }
  },
  {
    headerMode: "none"
  }
);

// function configureStore(initialState) {
//   const enhancer = compose(
//     applyMiddleware(),
//   )
//   return createStore(reducer, initialState, enhancer)
// }

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
