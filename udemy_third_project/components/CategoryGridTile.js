import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color,onPress }) => {
  return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={(p) => [styles.button, p.pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    // ios shadow
    // backgroundColor:"#fff",
    // shadowColor:'black',
    // shadowOpacity:0.25,
    // shadowOffset:{width:0,height:2},
    // shadowRadius:8
  },
  buttonPressed: {
    opacity: Platform.OS === "ios" ? 0.25 : 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
