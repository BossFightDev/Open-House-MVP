import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  Image
} from "react-native";
import { landscape, portrait } from "../../Pages/Style/open-houses-style.js";
import CustomText from "../CustomText";
import { dateTranslator } from "../../Assets/helper";

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

class POHContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.POHContainer}>
        <View style={styles.listTextContainer}>
          <CustomText style={styles.listTitle}>Past Open Houses</CustomText>
          <CustomText style={styles.guestCountTitle} font="light">
            # of Guests
          </CustomText>
        </View>
        {/* <View style={styles.list}> */}
        <FlatList
          style={styles.list}
          data={this.props.user.openHouses.slice().reverse()}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.POHItem}
              onPress={() => {
                const lead = this.props.user.openHouses.reverse()
                this.props.navigation.navigate("PastOpenHouses", {
                  lead: lead[index]
                });
              }}
            >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.POHItemImage}
                  source={{ uri: `${item.image}` }}
                />
              </View>
              <View style={styles.infoWrapper}>
                <View style={styles.infoContainer}>
                  <View style={styles.dateAddress}>
                    <CustomText style={styles.date} font="bold">
                      {dateTranslator(item.date)}
                    </CustomText>
                    <CustomText style={styles.address}>
                      {item.property.address}
                    </CustomText>
                  </View>
                  <View style={styles.guestCountContainer}>
                    <CustomText style={styles.guestCount} font="bold">
                      {item.guests || 0}
                    </CustomText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        {/* </View> */}
      </View>
    );
  }
}

export default POHContainer;
