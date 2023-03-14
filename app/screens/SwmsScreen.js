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
} from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

import CustomButton from "../assets/components/CustomButton";
import colors from "../config/colors";
import SVGimg from "../assets/images/assalogo.svg";
const SwmsScreen = ({ navigation }) => {
    return (
        <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        
       
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
});

export default SwmsScreen;
