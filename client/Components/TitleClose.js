import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const TitleClose = (props) => {
  return(
    <View>
      <Text>{props.title}</Text>
      <TouchableOpacity
        onPress={ () => props.navigation.navigate(props.nextLocation) }
      >
        <Image source={require('../Assets/iconClose.png')} />
      </TouchableOpacity>
    </View> 
  )
}

export default TitleClose;