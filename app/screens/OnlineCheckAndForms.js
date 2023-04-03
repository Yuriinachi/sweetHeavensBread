import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";

import SearchBar from "react-native-dynamic-search-bar";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

import CustomButton from "../assets/components/CustomButton";
import colors from "../config/colors";
import SVGimg from "../assets/images/assalogo.svg";
const CheckAndForms = ({ navigation }) => {
    return (
        <SafeAreaView
        style={{
          flex: 1,
        }}
      >
      <SearchBar
  placeholder="Search here"
  onPress={() => alert("onPress")}
  onChangeText={(text) => console.log(text)}
/>

<ScrollView>
  <Text> Online Checklists and Forms</Text>
  <Text> Fuck you, you rat cunt</Text>
</ScrollView>



       
        <SVGimg style={styles.logo} width={100} height={100} alignSelf="center" />
</SafeAreaView>
)};

const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      fontWeight: "500",
      color: "green",
      top: responsiveHeight(20),
      alignSelf: "center",
      position: "absolute",
    },
    logo: {
        bottom: 0,
        position: "absolute",
      },
    searchbar: {
      top: 10, 
    },
    chat: {
      width: 60,
      height: 60,
      position: "relative",
      top: 60,
      zIndex: 1,
    },
});

export default CheckAndForms;
