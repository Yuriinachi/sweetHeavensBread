import React from "react";
import { Text } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = ({ navigaton }) => {
  return(
    <SafeAreaView>
      <SearchBar
  placeholder="Search here"
  onPress={() => alert("onPress")}
  onChangeText={(text) => console.log(text)}
/>
    </SafeAreaView>

  )
};

export default SearchScreen;