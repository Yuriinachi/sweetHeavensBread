// // App lol
// ⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠣⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠈⠲⠆⢦⣾⣿⢻⣷⣦⣴⣠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⣶⡶
// ⠀⠀⠀⠈⢾⡿⣿⣿⣷⣏⣹⣏⡿⡿⢷⣶⣎⣹⣉⣈⣿⣷⣾⡿⣿⣏⠷⠀
// ⠀⠀⠀⠀⠈⢿⣷⣻⡾⣽⣯⢿⣽⡷⣿⣻⢯⣟⣯⣷⣟⣾⣽⡻⠗⠁⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⠓⠛⠿⣾⣻⣷⣻⣯⣟⣿⠽⠻⠾⠽⠚⠁⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠤⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
import * as React from "react";
import { View, Text, TouchableOpacity, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ASSAHome from "./app/screens/ASSAHome";
import SearchScreen from "./app/screens/SearchScreen";
import SwmsScreen from "./app/screens/SwmsScreen";
import colors from "./app/config/colors";
import Ionicon from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="ASSA"
      screenOptions={{  headerStyle: {
        backgroundColor: colors.darkgreen,
      },
      // headerBackVisible: false,
      headerBackTitleVisible: false,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      }, 
    }}>
        <Stack.Screen
          name="Main"
          component={WelcomeScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={ASSAHome}
          options={{
            headerLeft: () => (
              <Pressable
              android_ripple={{
                color: '#666666',
                foreground: true,
                borderless: true,
              }}
              onPress={() => {navigation.openDrawer()}}>
              <Ionicon
                style={{paddingLeft: 10, color: "white"}}
                name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                size={35}
              />
            </Pressable>
            ),
          
            headerRight: () => (
              <Pressable
              android_ripple={{
                color: '#ffffff',
                foreground: true,
                borderless: true,
              }}
              onPress={() => alert('This is profile')} >
              <Ionicon 
                style={{paddingLeft: 10, color: "white"}}
                name='person-circle-sharp'
                size={35}
              
              />
            </Pressable>
            )
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchBar"
          component={SearchScreen}
          
        />
        <Stack.Screen
          name="SWMS"
          component={SwmsScreen}
          options={{
            headerBackVisible: true,
            headerLeft: () => (
              <Button
                onPress={() => alert('This is the borigr menu')}
                title="Borgir"
                color="#00cc00"
              />
            ),
            headerRight: () => (
              <Button
                onPress={() => alert('This is the profile btn')}
                title='Profile'
                color="#00cc00"
                />
            )
          }}
          
        />
      </Stack.Navigator>

    
    </NavigationContainer>
  );
}

export default App;
