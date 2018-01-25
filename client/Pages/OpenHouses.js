import React, { Component } from "react";
import Modal from "react-native-modal";
import CustomText from "../Components/CustomText";
import { landscape, portrait } from "./Style/open-houses-style.js";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { findProperty, modalOff, relaunch } from "../actions";
import Logo from "../Components/OpenHouses/Logo";
import SearchBar from "../Components/OpenHouses/SearchBar";
import POHContainer from "../Components/OpenHouses/POHContainer";
import { priceTranslator } from "../Assets/helper";

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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      fontLoaded: false,
      MLS: ""
    };
  }
  /**
   * HANDLERS
   */

  _hideModal = () => this.props.modalOff();
  _onLayout(e) {
    const { width, height } = Dimensions.get("window");
  }
 

  render() {
    return (
      <View style={[styles.container, StyleSheet.absoluteFill]}>
        <Logo style={styles.logoContainer} logoStyle={styles.logo} />
        <View style={styles.rightSide}>
          <SearchBar
            findProperty={this.props.findProperty}
            showModal={this._showModal}
            appState={this.props.appState}
          />
          <POHContainer
            openHouses={this.props.openHouse.openHouses}
            navigation={this.props.navigation}
            relaunch={this.props.relaunch}
          />
        </View>
        <Modal
          isVisible={this.props.appState.showModal}
          supportedOrientations={[
            "portrait",
            "portrait-upside-down",
            "landscape-left",
            "landscape-right"
          ]}
          style={styles.modal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.contentWrapper}>
              <View style={styles.modalTextContainer}>
                <View style={styles.MLSAddress}>
                  <CustomText style={styles.modalMLS} font="bold">
                    {this.props.property.MLS}
                  </CustomText>
                  <CustomText style={styles.modalAddress}>
                    {this.props.property.address}
                  </CustomText>
                </View>
                <View style={styles.priceContainer}>
                  <CustomText style={styles.modalPrice} font="bold">
                    {priceTranslator(this.props.property.price)}
                  </CustomText>
                </View>
              </View>
              <View style={styles.modalImageContainer}>
                <Image
                  style={styles.modalImage}
                  source={{
                    uri: this.props.property.images[0]
                  }}
                />
              </View>
              <View>
                <View style={styles.modalButtonsContainer}>
                  <TouchableOpacity
                    style={styles.modalConfirmButton}
                    onPress={() => {
                      this._hideModal();
                      this.props.navigation.navigate("CreateOpenHouse");
                    }}
                    underlayColor="#fff"
                  >
                    <CustomText style={styles.modalConfirmText} font="bold">
                      CONFIRM
                    </CustomText>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalNopeButton}
                    onPress={this._hideModal}
                    underlayColor="#fff"
                  >
                    <CustomText style={styles.modalNopeText}>
                      Nope, Wrong Property
                    </CustomText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    property: state.property,
    user: state.user,
    openHouse: state.openHouse,
    appState: state.appState
  };
};

const mapDispatchToProps = {
  findProperty,
  modalOff,
  relaunch
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
