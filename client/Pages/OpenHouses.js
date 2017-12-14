import React, { Component } from "react";
import Modal from "react-native-modal";
import { Font } from "expo";
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
  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Light": require("../Assets/fonts/Montserrat-Light.ttf"),
      "Montserrat-Regular": require("../Assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../Assets/fonts/Montserrat-Bold.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../Assets/logo.png")} style={styles.logo} />
        </View>
        <View style={styles.openHouseContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Create a New Open House</Text>
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
                <Text style={styles.buttonText}>START</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.listTextContainer}>
              <Text style={styles.listTitle}>Past Open Houses</Text>
              <Text style={styles.guestCountTitle}># of Guests</Text>
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
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.address}>{item.address}</Text>
                  </View>
                  <View style={styles.guestCountContainer}>
                    <Text style={styles.guestCount}>{item.number}</Text>
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
            <View style={styles.modalTextContainer}>
              <Text>MLS# 12345678</Text>
              <Text>245 North Maple Avenue, Apt101, Waco</Text>
              <Text>$345,000</Text>
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
                  <Text style={styles.modalConfirmText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={landscape.modalNopeButton}
                  onPress={this._hideModal}
                  underlayColor="#fff"
                >
                  <Text style={styles.modalNopeText}>Nope, Wrong Property</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    ) : null;
  }
}
