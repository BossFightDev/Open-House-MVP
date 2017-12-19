import { Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Font } from 'expo'

export default class CustomText extends Component {
  constructor() {
    super()

    this.state = {
      fontLoaded: false,
      styles: StyleSheet.create({
        light: {
          fontFamily: 'Montserrat-Light'
        },
        regular: {
          fontFamily: 'Montserrat-Regular'
        },
        bold: {
          fontFamily: 'Montserrat-Bold'
        },
        milkshake: {
          fontFamily: ''
        }
      })
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Light": require("../Assets/fonts/Montserrat-Light.ttf"),
      "Montserrat-Regular": require("../Assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../Assets/fonts/Montserrat-Bold.ttf"),
      "Milkshake": require("../Assets/fonts/Milkshake.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  static propTypes = {
    font: PropTypes.oneOf([
      'light', 'regular', 'bold', 'milkshake'
    ]),
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ])
  }
  

  render() {
    const navigation = this.props.navigation ? () => this.props.navigation.navigate('OpenHouses') : null
    const { font, style } = this.props
    return this.state.fontLoaded ? (
      <Text onPress={navigation} style={[this.state.styles[font], style]}>{this.props.children}</Text>
    ) : null
  }
}

CustomText.defaultProps = {
  font: 'regular'
}
