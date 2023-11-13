import React, { useState } from "react";
import { Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const Map = () => {
  const [selectedlocation, setSelectedlocation] = useState();
  const navigation = useNavigation();
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const selectLocationHandler = (e) => {
    const lat = e.nativeEvent.coordinate.latitude;
    const lng = e.nativeEvent.coordinate.longitude;
    setSelectedlocation({
      lat: lat,
      lng: lng,
    });
    console.log(selectedlocation);
  };
  const savePickedLocation = () => {
    if (!selectedlocation) {
      Alert.alert(
        "No location picked",
        "You have to pick a location by tapping the map first"
      );
      return;
    }

    navigation.navigate("AddPlace");
  };
  return (
    <MapView
      onPress={selectLocationHandler}
      style={{ flex: 1 }}
      initialRegion={region}
    >
      {selectedlocation && (
        <Marker
          coordinate={{
            latitude: selectedlocation.lat,
            longitude: selectedlocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
