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
  Dimensions
} from "react-native";
import { portrait, landscape } from "./Style/login-style.js"
import { authenticateUser } from "../actions";
import { connect } from "react-redux";
import { Font } from "expo";

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
console.log('HEIGHT: ' + height);
console.log('WIDTH: ' + width);
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
}
let styles;
if (aspectRatio > 1.6) {
   styles = portrait;
  console.log('IPHONE');
  
}
else {
   styles = landscape;
  changeScreenOrientation();
  console.log('IPAD');
}
class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      fontLoaded: false
    };
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
        <Image source={require("../Assets/logo.png")} style={styles.logo}/>
        <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const validated = authenticateUser(true); // <~~ change this to true or false
            if (validated.authenticate)
              this.props.navigation.navigate("OpenHouses");
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Forgot Password</Text>
        </View>
        {/* <Button
          onPress={
            () => {
              const validated = authenticateUser(true); // <~~ change this to true or false
              if (validated.authenticate) this.props.navigation.navigate('OpenHouses')
            }}
          title='Login'
          color='black'
        />
        <Button
          onPress={
            () => {this.props.navigation.navigate('CreateOpenHouse')}}
          title='COH'
          color='purple'
        />
        <Text>Forgot Password</Text>
        <Text> {this.props.authenticated} </Text> */}
      </View>
    ) : null;
  }
}
const mapStateToProps = state => {
  return { authenticated: state.authenticated };
};

export default connect(mapStateToProps, { authenticateUser })(Login);
