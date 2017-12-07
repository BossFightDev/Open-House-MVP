import React, { Component } from 'react';
import {View, Text, Switch, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import components from '../../Components/COH'
const { RequiredField, SwitchField, ChooseImage, AddHashtags } = components;

class FieldSwitch extends Component{
  constructor(props) {
    super();
    this.state = {
      image: '../../Assets/iconHouse3x.png',
      imageChange: false,
      Hashtags: null,
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    //console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  

  onValueChange = () => {
    return this.props.switchChange(this.props.parentIndex, this.props.switchIndex);

  }
  renderQuestions = () => {
    switch(this.props.type){
      case 'Required':
        return(
          <RequiredField question={this.props.question} style={styles.simpleField}/>
        )
        break;
      case 'Image':
        return(
          <ChooseImage question={this.props.question}
            value={this.props.value}
            onChange={this.onValueChange}
            image={this.state.image}
            _pickImage={this._pickImage}
          />
        )
        break;
      case 'Add Hashtags':
        return(
          <AddHashtags />
        )
        break;
      case 'Boolean':
        return(
          <SwitchField question={this.props.question} 
            value={this.props.value} 
            onChange={this.onValueChange}
            style={styles.simpleField}
          />
        )
        break;
      default:
        return(
          <Text> This type has yet to be Implemented</Text>
        )
    }

  }
  render(){
    let { image } = this.state;
    return (
      <View style={this.props.style}>
        {this.renderQuestions()}
      </View>
    )

  }
}

const styles={
  simpleField:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
  },
}

export default FieldSwitch