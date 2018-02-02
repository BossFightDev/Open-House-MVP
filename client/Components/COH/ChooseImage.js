import React, { Component } from "react";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import {
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import CustomText from "../CustomText";
import { toggleImageModal, setHouseImage } from "../../actions/index";
import Button from "../Button";
import { landscape, portrait } from "../../Pages/Style/create-open-style";
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
class ChooseImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
  }
  onLeftPress = () => {
    if (this.props.property.images.length <= 1) return;
    if (this.state.position === 0) {
      this.setState({
        position: this.props.property.images.length - 1
      });
    } else {
      let newPosition = this.state.position;
      newPosition--;
      this.setState({
        position: newPosition
      });
    }
  };
  onRightPress = () => {
    if (this.props.property.images.length <= 1) return;
    if (this.state.position === this.props.property.images.length - 1) {
      this.setState({
        position: 0
      });
    } else {
      let newPosition = this.state.position;
      newPosition++;
      this.setState({
        position: newPosition
      });
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          width: "95%",
          // height: "100%",
          justifyContent: "center",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ddd",
          alignItems: "center",
          marginBottom: '2%',
        }}
      >
        <Modal
          isVisible={this.props.imageModal}
          supportedOrientations={[
            "portrait",
            "portrait-upside-down",
            "landscape-left",
            "landscape-right"
          ]}
          style={styles.modal}
          onBackdropPress={() => this.props.toggleImageModal("OFF")}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => {
                this.props.setImage(this.state.position);
                this.props.toggleImageModal("OFF");
              }}
            >
              <Image
                source={{
                  uri: this.props.property.images[this.state.position]
                }}
                style={{ flex: 1, resizeMode: "contain", width: "100%" }}
              />
            </TouchableOpacity>
            <View style={styles.modalButtonWrapper}>
              <View style={styles.modalButtonContainer}>
                <Button arrow="left" onPress={this.onLeftPress} />
                <Button arrow="right" onPress={this.onRightPress} />
                {/* <Button
                onPress={this._pickImage}
                title="Choose an image from Device"
                color="#454545"
              /> */}
              </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            flex: 1,
            width: "95%",
            height: "80%"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "2%",
              paddingBottom: "2%"
            }}
          >
            <CustomText font="bold">{this.props.question}</CustomText>
            <Switch
              value={this.props.value}
              onValueChange={this.props.onChange}
              style={{ alignSelf: "flex-end" }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              flex: 1,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <View style={[styles.displayImageContainer]}>
              <View
                style={{ flex: 1, width: "30%", justifyContent: "flex-start" }}
              >
                <Image
                  source={{
                    uri: this.props.image
                  }}
                  style={{
                    flex: 1,
                    alignSelf: "flex-start",
                    resizeMode: "contain",
                    width: "100%"
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.chooseImageButton}
              onPress={() => this.props.toggleImageModal("ON")}
              underlayColor="#fff"
            >
              <CustomText font="bold" style={{ color: "#999999" }}>
                Choose Image
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    appState: state.appState,
    property: state.property,
    questions: state.questions
  };
};

const mapDispatchToProps = {
  setHouseImage,
  toggleImageModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseImage);
