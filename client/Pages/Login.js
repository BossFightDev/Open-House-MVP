import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { portrait, landscape } from "./Style/login-style.js";
import { authenticateUser } from "../actions";
import { connect } from "react-redux";
import CustomText from "../Components/CustomText";
import { login } from "../actions";

const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
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
class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Image source={require("../Assets/logo.png")} style={styles.logo} />
        <View style={styles.loginContainer}>
          <View style={styles.inputContainer}>
            <CustomText style={styles.inputTitle}>Username</CustomText>
            <TextInput
              style={styles.input}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <CustomText style={styles.inputTitle}>Password</CustomText>
            <TextInput
              style={styles.input}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.login(
                  this.state.username,
                  this.state.password,
                  this.props.navigation
                );
              }}
            >
              <CustomText style={styles.buttonText} font={"bold"}>
                LOGIN
              </CustomText>
            </TouchableOpacity>
            <CustomText style={styles.text}>Forgot Password</CustomText>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => {
  return { authenticated: state.appState.authenticated };
};
const mapDispatchToProps = { authenticateUser, login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
