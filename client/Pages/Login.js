import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { authenticateUser } from "../actions";
import { connect } from "react-redux";
import { Font } from "expo";

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
      <View style={{ marginTop: 25, height: '100%', alignItems: "center", backgroundColor:"#454545"}}>
        <Image source={require("../Assets/logo.png")} style={{width: 180, height: 65, marginTop: 30}}/>
        <Text style={{ marginRight: '22%', marginTop: 25, fontFamily: "Montserrat-Regular", color: 'white', fontSize:8 }}>Username</Text>
        <TextInput
          style={landscape.inputContainer}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <Text style={{ marginRight: '22%', fontFamily: "Montserrat-Regular", color: 'white', fontSize:8 }}>Password</Text>
        <TextInput
          style={landscape.inputContainer}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity
          style={landscape.buttonContainer}
          onPress={() => {
            const validated = authenticateUser(true); // <~~ change this to true or false
            if (validated.authenticate)
              this.props.navigation.navigate("OpenHouses");
          }}
        >
          <Text style={landscape.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{fontFamily: "Montserrat-Regular", color: 'white', fontSize:8}}>Forgot Password</Text>
        <Button
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
        <Text> {this.props.authenticated} </Text>
      </View>
    ) : null;
  }
}
const mapStateToProps = state => {
  return { authenticated: state.authenticated };
};

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
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: '28%',
    backgroundColor: "#25AAFB",
    borderRadius: 2
  },
  inputContainer: {
      marginRight: 40,
      marginLeft: 40,
      marginTop: 2,
      marginBottom: 10,
      paddingTop: 5,
      paddingBottom: 5,
      width: '28%',
      backgroundColor: "white",
      borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "Montserrat-Bold",
    fontSize: 10
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalIamge: {
    height: 200,
    width: 300,
    alignItems: "center"
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
  }
});

export default connect(mapStateToProps, { authenticateUser })(Login);
