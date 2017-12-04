import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { CreateStore, combineReducers } from 'redux';
import * as Pages from './Pages';

const Routes = StackNavigator({
  Home: { screen: Pages.Login },
  Signup: { screen: Pages.Signup },
  OpenHouses: { screen: Pages.OpenHouses },
  CreateOpenHouse: { screen: Pages.CreateOpenHouse },
  PastOpenHouses: { screen: Pages.PastOpenHouses },
}, {
  headerMode: 'none'
});

const AppWithNavigationState = connect((state) => ({
  nav: state.nav,
}))(({ dispatch, nav }) => (
  <Routes navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

const store = createStore(reducers);

const App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

// export default Routes;
