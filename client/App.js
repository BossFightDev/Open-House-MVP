import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as Pages from './Pages';
import reducers from './reducers';

const Routes = StackNavigator({
  Home: { screen: Pages.Login },
  Signup: { screen: Pages.Signup },
  OpenHouses: { screen: Pages.OpenHouses },
  CreateOpenHouse: { screen: Pages.CreateOpenHouse },
  PastOpenHouses: { screen: Pages.PastOpenHouses },
}, {
  headerMode: 'none'
});

// function configureStore(initialState) {
//   const enhancer = compose(
//     applyMiddleware(),
//   )
//   return createStore(reducer, initialState, enhancer)
// }

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App;
