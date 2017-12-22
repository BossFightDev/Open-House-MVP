import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import CustomText from '../CustomText'

export default class extends Component {
  constructor() {
    super()

    this.state = {
      data: {
        address: '123 North Main Street, San Marcos',
        price: '$455,000',
        beds: 5,
        baths: 3.5,
        sqft: 3600,
        realtor: 'Jack Thompson',
        company: 'Real Estate Company',
        phone: '(801) 123-4567',
        email: 'jthompson@realty.com',
      }
    }
  }

  render() {
    return (
      <View style={{ width: '100%', height: '40%', marginTop:'4%', alignItems: 'center'}}>
        <Image
          source={require("../../Assets/houseTest.jpg")}
          style={{ flex: 1, resizeMode: 'contain' }}
        />
        <View style={{ position: 'absolute', width: 100, height: 100, marginTop: '1%', left: 0 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OpenHouses')}
          >
            <Image source={require('../../Assets/iconExit.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '96%', height: '35%', bottom: 0 }}>
          <TouchableOpacity style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
            <View style={{ width: '80%', marginLeft: '5%' }}>
              <CustomText style={{ color: 'white', fontSize: 13 }} font='bold' >{this.state.data.address}</CustomText>
            </View>
            <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>
              <CustomText style={{ color: 'white', marginRight: '2%', fontSize: 12 }} font='bold'>
                {this.state.data.price}
              </CustomText>
              <CustomText style={{ color: 'white', marginHorizontal: '2%', fontSize: 12 }} font='bold'>
                {this.state.data.beds} beds
              </CustomText>
              <CustomText style={{ color: 'white', marginHorizontal: '2%', fontSize: 12 }} font='bold'>
                {this.state.data.baths} baths
              </CustomText>
              <CustomText style={{ color: 'white', marginHorizontal: '2%', fontSize: 12 }} font='bold'>
                {this.state.data.sqft} sqft
              </CustomText>
            </View>
            <View style={{ marginLeft: '5%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../Assets/iconHouse2x.png")} style={{ marginRight: '2%' }}/>
                <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <CustomText font='bold' style={{ color: 'white', fontSize: 10 }}>{this.state.data.realtor}</CustomText>
                    <CustomText style={{ color: 'white', fontSize: 10 }}>, REALTOR</CustomText>
                  </View>
                  <CustomText style={{ color: 'white', fontSize: 10 }}>{this.state.data.company}</CustomText>
                  <View style={{ flexDirection: 'row' }}>
                    <CustomText style={{ color: 'white', fontSize: 10, marginRight: '5%' }}>{this.state.data.phone}</CustomText>
                    <CustomText style={{ color: 'white', fontSize: 10 }}>{this.state.data.email}</CustomText>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
