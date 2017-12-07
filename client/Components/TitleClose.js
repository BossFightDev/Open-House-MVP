import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const TitleClose = (props) => {
  return(
    <View style={props.style}>
      <Text>{props.title}</Text>
      <TouchableOpacity
        onPress={ () => props.navigation.navigate(props.nextLocation) }
      >
        <Image source={require('../Assets/iconClose.png')} />
      </TouchableOpacity>
    </View> 
  )
}

const styles = StyleSheet.create({

})

export default TitleClose;