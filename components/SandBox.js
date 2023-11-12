import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Free</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: 100,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 5,
    padding: 10,
    backgroundColor: "violet",
  },
  boxTwo: {
    flex: 1,
    padding: 10,
    backgroundColor: "gold",
  },
  boxThree: {
    flex: 1,
    padding: 10,
    backgroundColor: "coral",
  },
  boxFour: {
    flex: 1,
    padding: 10,
    backgroundColor: "skyblue",
  },
});
