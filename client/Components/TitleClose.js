import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const TitleClose = (props) => {
  return(
    <View style={styles.title}>
      <Text style={styles.text}>{props.title}</Text>
      <TouchableOpacity
        onPress={ () => props.navigation.navigate(props.nextLocation) }
      >
        <Image style={styles.close} source={require('../Assets/iconClose2x.png')} />
      </TouchableOpacity>
    </View> 
  )
}

const styles = StyleSheet.create({
  title:{
    flexDirection: 'row',
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '75%'
  },
  text:{
    flex:1,
    fontSize: 20,
    fontWeight: '500',
    color: '#999',
    paddingTop: 5,
    alignSelf: 'flex-start'
  },
  close:{
    flex:1,
    alignSelf: 'flex-end'
  }
})

export default TitleClose;