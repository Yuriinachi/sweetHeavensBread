import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Text,
  View,
} from "react-native";

import SVGimg from "../assets/images/assalogo.svg";
import colors from "../config/colors";
import RegisterScreen from "./RegisterScreen";
import CustomButton from "../assets/components/CustomButton";
import InputField from "../assets/components/InputField";

SplashScreen.preventAutoHideAsync();

const WelcomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <View style={{ paddingHorizontal: 25 }}>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>

        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          label={"Login"}
          onPress={() => navigation.navigate("ASSA")}
        />

        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: "700",
                marginLeft: 5,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <SVGimg style={styles.logo} width={100} height={100} alignSelf="center" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    bottom: 0,
    position: "absolute",
  },
  logoContainer: {
    top: 0,
    alignItems: "center",
  },
  EmailInput: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  PassInput: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
});
export default WelcomeScreen;