import React, { Component } from "react";
import CustomText from "../CustomText";

export default class extends Component {
  state = {
    pin: "",
    errorMessage: "",
    pin1Focused: false,
    pin2Focused: false,
    pin3Focused: false,
    pin4Focused: false
  };

  componentDidUpdate() {
    if (this.state.pin.length === 4) {
      if (this.state.pin === this.props.pin) {
      } else {
        this.setState({ errorMessage: "PIN doesn't match! Try again." });
        setTimeout(() => {
          this.setState({ errorMessage: "" });
        }, 5000);
      }
    }
  }

  clearPins = () => {
    this.refs.pin1.clear();
    this.refs.pin2.clear();
    this.refs.pin3.clear();
    this.refs.pin4.clear();
    this.refs.pin1.focus();
  };

  onFocus(focused) {
    if (focused === "pin1") this.setState({ pin1Focused: true });
    else if (focused === "pin2") this.setState({ pin2Focused: true });
    else if (focused === "pin3") this.setState({ pin3Focused: true });
    else if (focused === "pin4") this.setState({ pin4Focused: true });
  }

  onBlur(blurred) {
    if (blurred === "pin1") this.setState({ pin1Focused: false });
    else if (blurred === "pin2") this.setState({ pin2Focused: false });
    else if (blurred === "pin3") this.setState({ pin3Focused: false });
    else if (blurred === "pin4") this.setState({ pin4Focused: false });
  }

  render() {
    return (
      <View
        style={[
          this.props.styles.container,
          { justifyContent: "center", alignSelf: "center" }
        ]}
      >
        <CustomText style={{ fontSize: 18 }}>{pinMessage}</CustomText>
        <View style={this.props.styles.pinContainer}>
          <TextInput
            ref="pin1"
            keyboardType={"numeric"}
            maxLength={1}
            autoFocus={true}
            onFocus={() => this.onFocus("pin1")}
            onBlur={() => this.onBlur("pin1")}
            style={[this.props.styles.pinInput, { borderColor: pin1Border }]}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin2.focus()}
          />
          <TextInput
            ref="pin2"
            keyboardType={"numeric"}
            maxLength={1}
            onFocus={() => this.onFocus("pin2")}
            onBlur={() => this.onBlur("pin2")}
            style={[this.props.styles.pinInput, { borderColor: pin2Border }]}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin3.focus()}
          />
          <TextInput
            ref="pin3"
            keyboardType={"numeric"}
            maxLength={1}
            onFocus={() => this.onFocus("pin3")}
            onBlur={() => this.onBlur("pin3")}
            style={[this.props.styles.pinInput, { borderColor: pin3Border }]}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin4.focus()}
          />
          <TextInput
            ref="pin4"
            keyboardType={"numeric"}
            maxLength={1}
            onFocus={() => this.onFocus("pin4")}
            onBlur={() => this.onBlur("pin4")}
            style={[this.props.styles.pinInput, { borderColor: pin4Border }]}
            onChange={this.setPin}
            onChangeText={() => {
              if (!this.state.created) {
                this.setState({ created: true });
                this.clearPins();
              }
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.toggleModal();
            this.props.launchSignup();
          }}
        >
          <CustomText style={{ color: "blue", margin: "1%", fontSize: 16 }}>
            Cancel
          </CustomText>
        </TouchableOpacity>
        <CustomText font="bold" style={{ color: "red", marginTop: "5%" }}>
          {this.state.errorMessage}
        </CustomText>
      </View>
    );
  }
}
