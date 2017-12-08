import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';

class Button extends Component{
  constructor(props) {
    super()
  }
  smartMiddle = () => {
    switch(this.props.arrow){
      case 'left':
        return(
          <View style={landscape.innerButton}>
            <Image source={require('../Assets/iconBack.png')} />
            <Text> {this.props.label} </Text>
          </View>
        )
        break;
      case 'right':
        return(
          <View style={landscape.innerButton}>
            <Text> {this.props.label} </Text>
            <Image source={require('../Assets/iconArrow.png')} />
          </View>
        )
        break;
      default:
        return (
        <Text
          style={landscape.buttonText}
        >
          {this.props.label}
        </Text>
      )
    }
  }

  render(){
    return(
      <TouchableOpacity
        style={this.props.arrow === 'left'? landscape.buttonLeft: landscape.buttonRight}
        onPress={this.props.onPress}
        underlayColor="#fff"
      >
        {this.smartMiddle()}
      </TouchableOpacity>
    )
  }
}

export default Button;

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
  innerButton: {
    flexDirection: 'row',
  },
  buttonLeft: {
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
  buttonRight: {
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
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalIamge: {
    
    height: 200,
    width: 300,
    alignItems: 'center'
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
  },
});


