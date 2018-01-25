import React, { Component } from "react";
import CustomText from "../Components/CustomText";
import TitleClose from "../Components/TitleClose";
import { landscape, portrait } from "./Style/past-open-style.js";
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
import { connect } from "react-redux";
import { dateTranslator, phoneTranslator } from "../Assets/helper";

const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
};
let mobile = true;
let styles;
if (aspectRatio > 1.6) {
  styles = portrait;
  console.log("IPHONE");
} else {
  styles = landscape;
  mobile = false;
  changeScreenOrientation();
  console.log("IPAD");
}

export default class extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { lead, index, relaunch } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/*<View style={styles.logo}>*/}
          <Image source={require("../Assets/logo.png")} style={styles.logo} />
          {/*</View>*/}
        </View>
        <View style={styles.contentContainer}>
          <TitleClose
            navigation={this.props.navigation}
            nextLocation="OpenHouses"
            title="PAST OPEN HOUSE"
          />
          <View style={styles.leadsContainer}>
            <View style={styles.dateAddressContainer}>
              <View style={styles.dateAddressLeft}>
                <CustomText font="bold" style={{ color: "#454545" }}>
                  {dateTranslator(lead.date)}
                </CustomText>
                <CustomText>
                  {lead.property.address} -{" "}
                  {lead.guests} guests
                </CustomText>
              </View>
              <View style={styles.dateAddressRight}>
                <TouchableOpacity
                  style={styles.buttonContainer1}
                  underlayColor="#fff"
                  onPress={()=> relaunch(lead, this.props.navigation, index)}
                >
                  <CustomText style={styles.buttonText} font="bold">
                    RELAUNCH
                  </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonContainer2}
                  underlayColor="#89C541"
                  onPress={() => {
                    this.props.navigation.navigate("OpenHouses");
                  }}
                >
                  <CustomText style={styles.buttonText} font="bold">
                    EXPORT
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.labelContainer}>
              <CustomText style={styles.labelName} font="bold">
                NAME
              </CustomText>
              <CustomText style={styles.labelEmail} font="bold">
                EMAIL
              </CustomText>
              <CustomText style={styles.labelPhone} font="bold">
                PHONE
              </CustomText>
              <CustomText style={styles.labelAgent} font="bold">
                AGENT
              </CustomText>
              { mobile ?
              <CustomText style={styles.labelSource} font="bold">
                SRC
              </CustomText> :
              <CustomText style={styles.labelSource} font="bold">
                SOURCE
              </CustomText>
              }
            </View>
            <FlatList
              style={{ height: "100%" }}
              data={lead.leads}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <View style={styles.leadContainer}>
                  <CustomText style={styles.leadName}>{item.name}</CustomText>
                  <CustomText style={styles.leadEmail}>{item.email}</CustomText>
                  <CustomText style={styles.leadPhone}>{item.phone && phoneTranslator(item.phone)}</CustomText>
                  <CustomText style={styles.leadAgent}>{item.agent}</CustomText>
                  <CustomText style={styles.leadSource}>
                    {item.source}
                  </CustomText>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const list = [
  {
    name: "Dash Rendar",
    email: "dash.rendar@gmail.com",
    phone: "(555) 123-4567",
    agent: "Clark Kent",
    source: "Google"
  },
  {
    name: "Dash Rendar",
    email: "dash.rendar@gmail.com",
    phone: "(555) 123-4567",
    agent: "Clark Kent",
    source: "Google"
  },
  {
    name: "Dash Rendar",
    email: "dash.rendar@gmail.com",
    phone: "(555) 123-4567",
    agent: "Clark Kent",
    source: "Google"
  },
  {
    name: "Dash Rendar",
    email: "dash.rendar@gmail.com",
    phone: "(555) 123-4567",
    agent: "Clark Kent",
    source: "Google"
  }
];
