import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ item, deleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => deleteGoal(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
},
goalText: {
    color: "#fff",
    padding: 8,
  },
  pressedItem:{
    opacity:0.5
  }
});

export default GoalItem;
