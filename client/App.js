import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import * as Pages from './Pages';

const Routes = StackNavigator({
  Home: { screen: Pages.Home },
  Signup: { screen: Pages.Signup },
  Login: { screen: Pages.Login },
})

export default Routes;
