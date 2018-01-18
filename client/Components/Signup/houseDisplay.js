import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, TouchableOpacity } from "react-native";
import CustomText from "../CustomText";
import { priceTranslator, phoneTranslator } from "../../Assets/helper";

class HouseDisplay extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        address: "123 North Main Street, San Marcos",
        price: "$455,000",
        beds: 5,
        baths: 3.5,
        sqft: 3600,
        realtor: "Jack Thompson",
        company: "Real Estate Company",
        phone: "(801) 123-4567",
        email: "jthompson@realty.com"
      }
    };
  }

  render() {
    return (
      <View
        style={[
          { width: "100%", height: "40%", alignItems: "center" },
          this.props.styles.logoContainer
        ]}
      >
        <Image
          source={{ uri: this.props.questions.image }}
          style={{ width: "100%", height: "100%" }}
        />
        <View style={this.props.styles.exitIcon}>
          <TouchableOpacity onPress={() => this.props.exitingPage()}>
            <Image source={require("../../Assets/iconExit.png")} />
          </TouchableOpacity>
        </View>
        <View style={this.props.styles.cardContainer}>
          <TouchableOpacity style={this.props.styles.card}>
            <View style={this.props.styles.addressContainer}>
              <CustomText style={this.props.styles.addressText} font="bold">
                {this.props.property.address}
              </CustomText>
            </View>
            <View style={this.props.styles.detailsContainer}>
              {this.props.questions.priceQ && (
                <CustomText style={this.props.styles.priceText} font="bold">
                  {priceTranslator(this.props.property.price)}
                </CustomText>
              )}
              {this.props.questions.bedBathQ && (
                <CustomText style={this.props.styles.bedsText} font="bold">
                  {this.props.property.beds} beds {this.props.property.baths}{" "}
                  baths
                </CustomText>
              )}
              {this.props.questions.sqftQ && (
                <CustomText style={this.props.styles.sqftText} font="bold">
                  {this.props.property.sqft} sqft
                </CustomText>
              )}
            </View>
            <View style={this.props.styles.realtorDetailsContainer}>
              <View style={this.props.styles.realtorDetails}>
                <Image
                  source={{ uri: this.props.user.companyPicture }}
                  style={this.props.styles.realtorImage}
                  resizeMode="contain"
                />
                <View style={this.props.styles.realtorInfoContainer}>
                  <View style={this.props.styles.realtorInfo}>
                    <CustomText
                      font="bold"
                      style={this.props.styles.realtorName}
                    >{`${this.props.user.firstName} ${
                      this.props.user.lastName
                    }`}</CustomText>
                    <CustomText style={this.props.styles.realtorText}>
                      , REALTOR
                    </CustomText>
                  </View>
                  <CustomText style={this.props.styles.company}>
                    {this.props.user.company}
                  </CustomText>
                  <View style={this.props.styles.contactInfo}>
                    <CustomText style={this.props.styles.phoneNumber}>
                      {phoneTranslator(this.props.user.phoneNumber)}
                    </CustomText>
                    <CustomText style={this.props.styles.email}>
                      {this.props.user.email}
                    </CustomText>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    property: state.property,
    user: state.user,
    questions: state.questions
  };
};

export default connect(mapStateToProps)(HouseDisplay);
