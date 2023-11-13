import { View, Text, Image, StyleSheet, ScrollView,Button } from "react-native";
import React,{useEffect} from "react";
import { useRoute,useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";

const MenuDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const { mealId } = route.params;

  const selectedMeal = MEALS.filter((meal) => {
    return meal.id === mealId;
  });
  console.log(selectedMeal[0].ingredients);

  const headerRightButtonPressHandler = () => {
    console.log("pressed")

  }

  useEffect(() => {
    navigation.setOptions({
      headerRight:() => {
        return <IconButton icon='star' color="#fff" onPress={headerRightButtonPressHandler}/>
      }
    })

  },[headerRightButtonPressHandler,navigation])

  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={{ uri: selectedMeal[0].imageUrl }}
        />
        <Text style={styles.title}>{selectedMeal[0].title}</Text>
        <MealDetails
          affordability={selectedMeal[0].affordability}
          complexity={selectedMeal[0].complexity}
          duration={selectedMeal[0].duration}
          textStyle={styles.detailsText}
        />
        <Text style={styles.subTitle}>Ingredients</Text>
        {selectedMeal[0].ingredients?.map((ingredient) => {
          return <Text style={styles.detailText} key={ingredient}>{ingredient}</Text>;
        })}

        <Text style={styles.subTitle}>steps</Text>
        {selectedMeal[0].steps?.map((step) => {
          return <Text style={styles.detailText} key={step}>{step}</Text>;
        })}
      </View>
    </ScrollView>
  );
};

export default MenuDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailsText: {
    color: "#fff",
  },
  subTitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  detailText:{
    textAlign:"center",
    backgroundColor:"#e2b497",
    marginTop:5,
    marginHorizontal:34,
    padding:10,
    borderRadius:5
  }
});
