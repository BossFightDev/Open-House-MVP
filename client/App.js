import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import * as Pages from './Pages';

const Routes = StackNavigator({
  Home: { screen: Pages.Login },
  Signup: { screen: Pages.Signup },
  OpenHouses: { screen: Pages.OpenHouses },
  CreateOpenHouse: { screen: Pages.CreateOpenHouse },
  PastOpenHouses: { screen: Pages.PastOpenHouses },
}, {
  headerMode: 'none'
})

export default Routes;
