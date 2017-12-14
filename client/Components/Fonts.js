import { Font } from "expo";
import React, { Component } from "react";

class Font extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    }
  }
  static propTypes = {
    content: React.PropTypes.string.isRequired,
    textStyles: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.number,
      React.PropTypes.shape({}),
    ]).isRequired,
    fonts: React.PropTypes.oneOfType([
      "light",
      "regular",
      "bold"
    ]).isRequired
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
      <Text>{this.props.content}</Text>
    ) : null;
  }
}