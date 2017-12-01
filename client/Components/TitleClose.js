import React from 'react';
import { Text, Switch } from 'react-native';

const TitleClose = (props) => {
  return(
    <View>
      <Text>Past Open House</Text>
      <TouchableOpacity
        onPress={ () => this.props.navigation.navigate(props.nextLocation) }
      >
        <Image source={require('../Assets/iconClose.png')} />
      </TouchableOpacity>
    </View> 
  )
}