import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate("Login")}
          title="Log In"
          color="black"
        />
        <Button
          onPress={() => navigate("Signup")}
          title="Sign Up"
          color="black"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
