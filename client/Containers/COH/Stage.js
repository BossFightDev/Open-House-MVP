import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import TitleCard from '../../Components/TitleClose';
import FieldSwitch from '../../Containers/COH/FieldSwitch';

export default class extends Component {
  constructor(props) {
    super();
  }
  buttonRenderer(){
    switch(this.props.active) {
      case 0:
        return (
          <View style={styles.button}>
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active+2) }
              title='Next'
              color='black'
            />
          </View>
        )
        break;
      case this.props.lastStage:
        return (
          <View style={styles.button}>
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active) }
              title='Back'
              color='black'
            />
            <Button
              onPress={ () => this.props.navigation.navigate('Signup') }
              title='Preview and Launch'
              color='black'
            />
          </View>
        )
        break;
      default:
        return (
          <View style={styles.button}>
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active) }
              title='Back'
              color='black'
            />
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active+2) }
              title='Next'
              color='black'
            />
          </View>
        )
    }
  }

  render() {
    return (
      <View style={this.props.style}>
        <TitleCard title='PAST OPEN HOUSE' 
          navigation={this.props.navigation}
          style={styles.title} 
          nextLocation='Open Houses'
        /> 
        <Text>{this.props.title}</Text>
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
  title:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  fields:{
    flexBasis: '15%',
    alignContent: 'flex-end',

  },
  button: {
    flex: 1,
    justifyContent: 'space-between',
  }
})