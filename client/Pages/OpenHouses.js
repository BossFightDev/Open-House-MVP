import React, { Component } from "react";
import Modal from "react-native-modal";
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


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }
  /**
   * HANDLERS
   */
  _showModal = () => this.setState({ isModalVisible: true });
  _hideModal = () => this.setState({ isModalVisible: false });
  onLayout(e) {
    const {width, height} = Dimensions.get('window')
  }

  render() {
    return (
      <View
        style={landscape.container}
      >
        <View
          style={landscape.logo}
        >
          <Image source={require("../Assets/logo.png")} />
        </View>
        <View
          style={landscape.openHouseContainer}
        >
          <View style={landscape.inputButtonContainer}>
            <Text>Create a New Open House</Text>
            <View style={landscape.searchBarContainer}>
              <TextInput
                style={landscape.searchBar}
                placeholder="Enter MLS# or Select a Listing"
              />
              <TouchableOpacity
                style={landscape.buttonContainer}
                onPress={this._showModal}
                underlayColor="#fff"
              >
                <Text
                  style={landscape.buttonText}
                >
                  Start
                </Text>
              </TouchableOpacity>
              <View style={landscape.modalContainer}>
              <Modal 
              isVisible={this.state.isModalVisible}
              supportedOrientations={['portrait', 'portrait-upside-down', 'landscape-left', 'landscape-right']}
              >
                <View>
                  <Text>MLS# 12345678</Text>
                  <Text>245 North Maple Avenue, Apt101, Waco</Text>
                  <Text>$345,000</Text>
                </View>
                <View>
                  <Image
                    style={landscape.modalIamge}
                    source={{
                      uri:
                        "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg"
                    }}
                  />
                </View>
                <View>
                  <View>
                    <TouchableOpacity
                      style={landscape.modalConfirmButton}
                      onPress={() => {
                        this._hideModal();
                        this.props.navigation.navigate("CreateOpenHouse");
                      }}
                      underlayColor="#fff"
                    >
                      <Text
                        style={{
                          color: "#fff",
                          textAlign: "center",
                          paddingLeft: 10,
                          paddingRight: 10
                        }}
                      >
                        Confirm
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={landscape.modalNopeButton}
                      onPress={this._hideModal}
                      underlayColor="#fff"
                    >
                      <Text
                        style={{
                          color: "gray",
                          textAlign: "center",
                          paddingLeft: 10,
                          paddingRight: 10
                        }}
                      >
                        Nope, Wrong Property
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              </View>
            </View>
          </View>
          <View>
            <Text>Past Open Houses</Text>
            <Text># of Guests</Text>
            <FlatList
              data={[
                {
                  key: 1,
                  image:
                    "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg",
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
                    "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg",
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
                    "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg",
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
                <View style={landscape.POHItem}>
                  <Image
                    style={landscape.POHItemImage}
                    source={{ uri: `${item.image}` }}
                  />
                  <Text>{item.date}</Text>
                  <Text>{item.address}</Text>
                  <Text>{item.number}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const landscape = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  logo: {
    backgroundColor: "#454545",
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  openHouseContainer: {
    backgroundColor: "#F1F1F1",
    alignItems: "flex-end",
    height: "100%"
  },
  inputButtonContainer: {
    borderBottomWidth: 1, 
    borderBottomColor: "#DDDDDD"
  },
  searchBarContainer: {
    flexDirection: "row", 
    alignItems: "center" 
  },
  searchBar: {
    backgroundColor: "white"
  },
  buttonContainer: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#25AAFB",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalIamge: {
    
    height: 200,
    width: 300,
    alignItems: 'center'
  },
  modalNopeButton: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#fff"
  },
  modalConfirmButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#25AAFB",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#fff"
  },
  POHItem: {
    backgroundColor: "white"
  },
  POHItemImage: {
    width: 50, 
    height: 50
  },
});
