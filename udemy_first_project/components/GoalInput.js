import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ onAddGoal, modelIsVisible, endGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  return (
    <Modal visible={modelIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/logo.png")}/>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color={"#f31282"} onPress={endGoalHandler} title="Cancel" />
          </View>
          <View style={styles.button}>
            <Button
            color={"#5e0acc"}
              onPress={() => {
                onAddGoal(enteredGoalText);
                setEnteredGoalText("");
              }}
              title="add Goal!"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    color:"#120438",
    width: "100%",
    borderRadius:6,
    padding:16
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginTop: 18,
    width: 100,
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});

export default GoalInput;
