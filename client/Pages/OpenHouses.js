import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
// import Orientation from 'react-native-orientation';

export default class App extends Component {
  // componentDidMount() {
  //   Orientation.lockToLandscape();
  // }
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    }
  }
  _showModal = () => this.setState({ isModalVisible: true })
  _hideModal = () => this.setState({isModalVisible: false})
  render() {
    return (
      <View style={
        {
          flex: 1,
          flexDirection: 'row',
        }
      }>
        <View style={
          {
            backgroundColor: '#454545',
            height: '100%',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center'
          }
          }>
          <Image
            source={require('../Assets/logo.png')}
          />
        </View>
        <View style={
          {
            backgroundColor: '#F1F1F1',
            alignItems: 'flex-end',
            height: '100%',
          }
        }>
          <View style={{borderBottomWidth:1, borderBottomColor: '#DDDDDD'}}>
            <Text>Create a New Open House</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <TextInput
              style={{backgroundColor:'white'}}
              placeholder = "Enter MLS# or Select a Listing"
              />
              <TouchableOpacity
              style={{marginRight:40,
                marginLeft:40,
               marginTop:10,
                paddingTop:10,
                paddingBottom:10,
                backgroundColor:'#25AAFB',
                borderRadius:0,
                borderWidth: 1,
                borderColor: '#fff'}}
                onPress={this._showModal}
                underlayColor='#fff'
                >
          <Text style={{color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10}}>Start</Text>
              </TouchableOpacity>
              <Modal isVisible={this.state.isModalVisible}>
                <View>
                  <Text>MLS# 12345678</Text>
                  <Text>245 North Maple Avenue, Apt101, Waco</Text>
                  <Text>$345,000
                  </Text>
                </View>
                <View>
                <Image style={{width: 500, height: 300}}
  source={{uri: 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg'}} />
                </View>
                <View>
                  <View>
                  <TouchableOpacity
                  style={{marginRight:40,
                    marginLeft:40,
                   marginTop:10,
                    paddingTop:10,
                    paddingBottom:10,
                    backgroundColor:'#25AAFB',
                    borderRadius:0,
                    borderWidth: 1,
                    borderColor: '#fff'}}
                onPress={() => {
                  this._hideModal();
                  this.props.navigation.navigate('CreateOpenHouse')
                }}
                underlayColor='#fff'
                >
          <Text style={{color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10}}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={{marginRight:40,
                marginLeft:40,
               marginTop:10,
                paddingTop:10,
                paddingBottom:10,
                backgroundColor:'white',
                borderRadius:0,
                borderWidth: 1,
                borderColor: '#fff'}}
                onPress={this._hideModal}
                underlayColor='#fff'
                >
          <Text style={{color:'gray',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10}}>Nope, Wrong Property</Text>
              </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          <View>
            <Text>Past Open Houses</Text>
            <Text># of Guests</Text>
            <FlatList
  data={[
    {key: 1, image: 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg', date: 'Oct 24, 2017', address: '245 Maple Ave, Waco', number: 52},
    {key: 2, image: 'https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15', date: 'Oct 01, 2017', address: '11 West Main St, Lubbock', number: 41},
    {key: 3, image: 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg', date: 'Oct 24, 2017', address: '245 Maple Ave, Waco', number: 52},
    {key: 4, image: 'https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15', date: 'Oct 01, 2017', address: '11 West Main St, Lubbock', number: 41},
    {key: 5, image: 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg', date: 'Oct 24, 2017', address: '245 Maple Ave, Waco', number: 52},
    {key: 6, image: 'https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15', date: 'Oct 01, 2017', address: '11 West Main St, Lubbock', number: 41}
  ]}
  renderItem={({item}) => <View style={{backgroundColor:'white'}}><Image style={{width: 50, height: 50}}
  source={{uri: `${item.image}`}} /><Text>{item.date}</Text><Text>{item.address}</Text><Text>{item.number}</Text></View>}
/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
