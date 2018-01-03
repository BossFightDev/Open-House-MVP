import React, { Component } from "react";
import Modal from "react-native-modal";
import CustomText from "../Components/CustomText";
import { landscape, portrait } from "./Style/open-houses-style.js";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from 'react-redux';
import { findProperty, findLeads, modalOff } from '../actions';
import { dateTranslator } from "../Assets/helper";

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
      MLS: '',
    };
  }
  /**
   * HANDLERS
   */
  _showModal = () => {
    this.props.findProperty(this.state.MLS, this.props.appState.showModal);
    this.setState({ isModalVisible: true });
  }
  _hideModal = () => this.props.modalOff();
  onLayout(e) {
    const { width, height } = Dimensions.get("window");
  }
  onClickLeads = (userID) => {
    this.props.findLeads(userID);
    this.props.navigation.navigate('PastOpenHouses');
  } 
  componentDidMount() {
    console.log(`User Id: ${this.props.user._id}`)
    this.props.findLeads(this.props.user._id)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../Assets/logo.png")} style={styles.logo} />
        </View>
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
          <View>
            <View style={styles.listTextContainer}>
              <CustomText style={styles.listTitle}>Past Open Houses</CustomText>
              <CustomText style={styles.guestCountTitle} font="light"># of Guests</CustomText>
            </View>
            <View style={{height:'100%'}}>
            <FlatList
              data={this.props.user.openHouses}
              renderItem={({ item, index }) => (
                <View>
                <TouchableOpacity 
                style={styles.POHItem}
                  onPress={
                  () => {this.props.navigation.navigate('PastOpenHouses', {lead: this.props.user.openHouses[index]})}}>
                  <View style={styles.imageContainer}>
                  <Image
                    style={styles.POHItemImage}
                    source={{ uri: `${item.image}` }}
                  />
                  </View>
                  <View style={styles.infoWrapper}>
                  <View style={styles.infoContainer}>
                  <View style={styles.dateAddress}>
                    <CustomText style={styles.date} font="bold">{dateTranslator(item.date)}</CustomText>
                    <CustomText style={styles.address}>{item.property.address}</CustomText>
                  </View>
                  <View style={styles.guestCountContainer}>
                    <CustomText style={styles.guestCount} font="bold">{item.guests || 0 
                    }</CustomText>
                  </View>
                  </View>
                  </View>
                </TouchableOpacity>
                </View>
              )}
            />
            </View>
          </View>
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
              <CustomText style={styles.modalMLS} font="bold">{this.props.property.MLS}</CustomText>
              <CustomText style={styles.modalAddress}>{this.props.property.address}</CustomText>
              </View>
            <View style={styles.priceContainer}>
            <CustomText style={styles.modalPrice} font="bold">{this.props.property.price}</CustomText>
            </View>
            </View>
            <View style={styles.modalImageContainer}>
              <Image
                style={styles.modalImage}
                source={{
                  uri:
                    this.props.property.images[0]
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
                  <CustomText style={styles.modalConfirmText} font="bold">CONFIRM</CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalNopeButton}
                  onPress={this._hideModal}
                  underlayColor="#fff"
                >
                  <CustomText style={styles.modalNopeText}>Nope, Wrong Property</CustomText>
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
    appState: state.appState,
  }
}

const mapDispatchToProps = {
  findProperty,
  findLeads,
  modalOff
}

export default connect(mapStateToProps, mapDispatchToProps)(App)