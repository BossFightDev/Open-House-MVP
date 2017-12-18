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
const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
console.log("HEIGHT: " + height);
console.log("WIDTH: " + width);
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
};
let styles;
if (aspectRatio > 1.6) {
  styles = portrait;
  console.log("IPHONE");
} else {
  styles = landscape;
  changeScreenOrientation();
  console.log("IPAD");
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      fontLoaded: false
    };
  }
  /**
   * HANDLERS
   */
  _showModal = () => this.setState({ isModalVisible: true });
  _hideModal = () => this.setState({ isModalVisible: false });
  onLayout(e) {
    const { width, height } = Dimensions.get("window");
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
            <FlatList style={{height:'100%'}}
              data={[
                {
                  key: 1,
                  image:
                    "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
                  date: "Oct 24, 2017",
                  address: "245 Maple Ave, Waco",
                  number: 52
                },
                {
                  key: 2,
                  image:
                    "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
                  date: "Oct 01, 2017",
                  address: "11 West Main St, Lubbock",
                  number: 41
                },
                {
                  key: 3,
                  image:
                    "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
                  date: "Oct 24, 2017",
                  address: "245 Maple Ave, Waco",
                  number: 52
                },
                {
                  key: 4,
                  image:
                    "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
                  date: "Oct 01, 2017",
                  address: "11 West Main St, Lubbock",
                  number: 41
                },
                {
                  key: 5,
                  image:
                    "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
                  date: "Oct 24, 2017",
                  address: "245 Maple Ave, Waco",
                  number: 52
                },
                {
                  key: 6,
                  image:
                    "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
                  date: "Oct 01, 2017",
                  address: "11 West Main St, Lubbock",
                  number: 41
                }
              ]}
              renderItem={({ item }) => (
                <View style={styles.POHItem}>
                  <View style={styles.imageContainer}>
                  <Image
                    style={styles.POHItemImage}
                    source={{ uri: `${item.image}` }}
                  />
                  </View>
                  <View style={styles.infoWrapper}>
                  <View style={styles.infoContainer}>
                  <View style={styles.dateAddress}>
                    <CustomText style={styles.date} font="bold">{item.date}</CustomText>
                    <CustomText style={styles.address}>{item.address}</CustomText>
                  </View>
                  <View style={styles.guestCountContainer}>
                    <CustomText style={styles.guestCount} font="bold">{item.number}</CustomText>
                  </View>
                  </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
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
              <CustomText style={styles.modalMLS} font="bold">MLS# 12345678</CustomText>
              <CustomText style={styles.modalAddress}>245 North Maple Avenue, Apt101, Waco</CustomText>
              </View>
            <View style={styles.priceContainer}>
            <CustomText style={styles.modalPrice} font="bold">$345,000</CustomText>
            </View>
            </View>
            <View style={styles.modalImageContainer}>
              <Image
                style={styles.modalImage}
                source={{
                  uri:
                    "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15"
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
