import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { landscape, portrait } from "../../Pages/Style/open-houses-style.js";
import CustomText from "../CustomText";

// SET PROPER STYLING IF LANDSCAPE OR PORTRAIT
const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
};
let styles;
if (aspectRatio > 1.6) {
  styles = portrait;
} else {
  styles = landscape;
  changeScreenOrientation();
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MLS : '',
    }
  }
  _showModal = () => {
    this.props.findProperty(this.state.MLS, this.props.appState.showModal);
    this.setState({ isModalVisible: true });
  }
  render() {
    return (
      <View style={styles.openHouseContainer}>
          <View style={styles.headerContainer}>
            <CustomText style={styles.title}>Create a New Open House</CustomText>
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.searchBar}
                placeholder="Enter MLS# or Select a Listing"
                onChangeText={MLS => this.setState({ MLS })}
                value={this.state.MLS}
              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this._showModal}
                underlayColor="#fff"
              >
                <CustomText style={styles.buttonText} font="bold">START</CustomText>
              </TouchableOpacity>
            </View>
          </View>
      </View>

    )
  }
}
export default SearchBar;