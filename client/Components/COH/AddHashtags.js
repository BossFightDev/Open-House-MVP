import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import CustomText from "../CustomText";
import { landscape, portrait } from "../../Pages/Style/create-open-style.js";
import { connect } from "react-redux";

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

class AddHashtags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtags: [`openhouse${this.props.MLS}`, ""]
    };
  }
  onChange = (text, index) => {
    const hashtags = this.state.hashtags;
    hashtags[index] = text;
    this.setState({
      hashtags: hashtags
    });
  };
  addHashtag() {
    const { hashtags } = this.state;
    return hashtags.map((hashtag, i) => {
      return (
        <View key={i.toString()} style={styles.hashtagInputContainer}>
          <TextInput
            style={styles.hashtagInput}
            placeholder="Enter hashtag"
            onChangeText={text => this.onChange(text, i)}
            value={this.state.hashtags[i]}
          />
        </View>
      );
    });
  }
  addInput = () => {
    const { hashtags } = this.state;
    hashtags.push("");
    this.setState({ hashtags });
  };

  render() {
    return (
      <View style={styles.hashtagContainer}>
        <ScrollView bounces={false}>{this.addHashtag()}</ScrollView>
        <TouchableOpacity
          style={styles.hashtagButton}
          onPress={() => this.addInput()}
          underlayColor="#fff"
        >
          <CustomText font="bold" style={styles.hashtagFont}>
            Add Another
          </CustomText>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.search.currentText);
  return {
    MLS: state.search.currentText
  }
}

export default connect(mapStateToProps)(AddHashtags);
