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

const ASSAHome = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={colors.darkgreen} />
      <View
        style={{
          backgroundColor: colors.darkgreen,
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(13),
          marginTop: "-15%",
        }}
      />
      <View
        style={{
          backgroundColor: colors.lightgreen,
          width: responsiveWidth(100),
          height: responsiveHeight(2),
        }}
      />
      <View
        style={{
          backgroundColor: colors.fill,
          width: responsiveWidth(100),
          height: responsiveHeight(100),
        }}
      />
      <Text style={styles.header}>HOME PAGE</Text>
      {/* <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(60),
          justifyContent: "center",
          alignSelf: "center",
          position: "absolute",
        }}
      >
        <View>
          <Image
            style={styles.glass}
            source={require("../assets/images/glass.png")}
          />
          <CustomButton
            label={"Search"}
            onPress={() => navigation.navigate("RegisterScreen")}
          />
        </View>
      </View> */}

      {/* <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(90),
          justifyContent: "center",
          alignSelf: "center",
          position: "absolute",
        }}
      >
        <View>
          <Image
            style={styles.swms}
            source={require("../assets/images/swms.png")}
          />
          <CustomButton
            label={"SWMS"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View> */}

      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(150),
          justifyContent: "center",
          alignSelf: "center",
          position: "absolute",
        }}
      >
        <View>
          <Image
            style={styles.chat}
            source={require("../assets/images/chat.png")}
          />
          <CustomButton
            label={"LIVE CHAT"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(15),
          height: responsiveHeight(10),
          justifyContent: "center",
          position: "absolute",
          bottom: responsiveHeight(87),
          left: responsiveWidth(10),
        }}
      >
        <ImageBackground
          style={styles.profile}
          source={require("../assets/images/Dicks.png")}
        >
          <CustomButton
            label={"FUCK YOU"}
            onPress={() => navigation.navigate("Main")}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          width: responsiveWidth(15),
          height: responsiveHeight(10),
          justifyContent: "center",
          position: "absolute",
          bottom: responsiveHeight(87),
          left: responsiveWidth(80),
        }}
      >
        <View>
          <Image
            style={styles.profile}
            source={require("../assets/images/Dicks.png")}
          />
          <CustomButton
            style={{ zIndex: 0 }}
            label={""}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(10),
          justifyContent: "center",
          position: "absolute",
          bottom: responsiveHeight(55),
          left: responsiveWidth(5),
        }}
      >
        <View>
          <Image
            style={styles.profile}
            source={require("../assets/images/Dicks.png")}
          />
          <CustomButton
            label={"KILL"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(10),
          justifyContent: "center",
          position: "absolute",
          bottom: responsiveHeight(35),
          left: responsiveWidth(5),
        }}
      >
        <View>
          <Image
            style={styles.profile}
            source={require("../assets/images/Dicks.png")}
          />
          <CustomButton
            label={"PLS"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(10),
          justifyContent: "center",
          position: "absolute",
          bottom: responsiveHeight(45),
          left: responsiveWidth(5),
        }}
      >
        <View>
          <Image
            style={styles.profile}
            source={require("../assets/images/Dicks.png")}
          />
          <CustomButton
            label={"ME"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>
      <SVGimg style={styles.logo} width={100} height={100} alignSelf="center" />
    </SafeAreaView>
  );
};

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
  buttons: {
    alignSelf: "center",
  },
  glass: {
    width: 10,
    height: 10,
    position: "relative",
    top: 30,
    zIndex: 1,
  },
  swms: {
    width: 60,
    height: 60,
    position: "relative",
    top: 60,
    zIndex: 1,
  },
  chat: {
    width: 60,
    height: 60,
    position: "relative",
    top: 60,
    zIndex: 1,
  },
  iir: {
    width: 60,
    height: 60,
    position: "relative",
    top: 60,
    zIndex: 1,
  },
  profile: {
    width: 60,
    height: 60,
    position: "relative",
    top: 60,
    zIndex: 1,
  },
});
export default ASSAHome;
