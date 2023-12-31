import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MenuDetailScreen from "./screens/MenuDetailScreen";

const DrawerNavigation = () => {
  return null
}

export default function App() {
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator()
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params
            //   return{
            //     title:categoryId
            //   }
            // }}
          />
          <Stack.Screen
            name="menuDetailPage"
            component={MenuDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
