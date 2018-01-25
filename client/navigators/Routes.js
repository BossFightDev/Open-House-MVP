import React, { Component } from "react";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import * as Pages from "../Pages";


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

export default class Route extends Component {
  render() {
    return (
        <Routes />
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}
