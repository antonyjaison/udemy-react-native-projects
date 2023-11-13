import { View, StyleSheet, Alert, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Instructiontext from "../components/ui/InstructionText";
import Card from "../components/ui/Card";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    generateRandomBetween(min, max, exclude);
  } else return rndNum;
};
let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuss = generateRandomBetween(1, 100, userNumber);
  useEffect(() => {
    if (currentGuss === userNumber) {
      onGameOver();
      console.log("game over");
    }
  }, [currentGuss, userNumber, onGameOver]);

  console.log(currentGuss === userNumber);

  const [currentGuss, setCurrentGuss] = useState(initialGuss);

  console.log(minBoundry, maxBoundry, userNumber);

  const nextGussHandler = (direction) => {
    if (
      (direction === "lower" && currentGuss < userNumber) ||
      (direction === "greater" && currentGuss > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuss;
    } else {
      minBoundry = currentGuss + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuss
    );
    setCurrentGuss(newRndNumber);
  };

  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guss</Title>
      <NumberContainer>{currentGuss}</NumberContainer>
      <Card>
        <Instructiontext style={styles.instructionText}>
          Higher or lower?
        </Instructiontext>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGussHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="#fff" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGussHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="#fff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
});

export default GameScreen;
