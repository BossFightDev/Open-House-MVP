import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TitleClose from '../../Components/TitleClose';
import components from '../../Components';
import FieldSwitch from '../../Containers/COH/FieldSwitch';
const { Button } = components;

export default class extends Component {
  constructor(props) {
    super();
  }
  onSubmit
  buttonRenderer(){
    switch(this.props.active) {
      case 0:
        return (
          <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active+2) }
              label='Next'
              color='black'
              arrow='right'
            />
          </View>
          </View>
        )
        break;
      case this.props.lastStage:
        return (
          <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active) }
              label='Back'
              color='black'
              arrow='left'
            />
            <Button
              onPress={ () => this.props.onSubmitHashtags() }
              label='Preview and Launch'
              color='black'
              arrow='right'
            />
          </View>
          </View>
        )
        break;
      default:
        return (
          <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active) }
              label='Back'
              color='black'
              arrow='left'
            />
            <Button
              onPress={ () => {
                this.props.onSubmitQuestions();
                this.props.activeOnPress(this.props.active+2) 
              }}
              label='Next'
              color='black'
              arrow='right'
            />
          </View>
          </View>
        )
    }
  }

  render() {
    return (
      <View style={this.props.style}>
        <TitleClose title='CREATE OPEN HOUSE' 
          navigation={this.props.navigation}
          nextLocation='OpenHouses'
        /> 
        <Text style={styles.title}>{this.props.title}</Text>
        {this.props.fields.map((field, i) => {
          return <FieldSwitch 
            key={i.toString()}
            question={field.Question} 
            type={field.type} 
            value={field.value} 
            parentIndex={this.props.active}
            switchIndex={i}
            switchChange={this.props.switchOnPress}
            style={styles.fields}
            />
        })}
        {this.buttonRenderer()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fields:{
    display:'flex',
    flex: 1,
    // flexBasis: '15%',
    alignContent: 'flex-end',

  },
  buttonWrapper: {
    borderWidth: 3,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: 'red',
    width: '50%'
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    color: '#454545',
  },
  button2: {

  }

})