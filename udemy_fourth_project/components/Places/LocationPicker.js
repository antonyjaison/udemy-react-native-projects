import { View, StyleSheet, Alert } from "react-native";
import React from "react";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useNavigation } from "@react-navigation/native";

const LocationPicker = () => {
  const navigation = useNavigation()
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

    const verifyPermissions = async () => {
      if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
      } else if (locationPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
          "Insufficient Permissions!",
          "You will need to grant location permission to use the app"
        );
        return false;
      } else {
        return true;
      }
    };
    

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location)
  };
  const pickOnMapHandler = () => {
    navigation.navigate("Map")
  };
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton
          icon="location"
          title="Locate user"
          onPress={getLocationHandler}
        />
        <OutlinedButton
          icon="map"
          title="Pick on map"
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
