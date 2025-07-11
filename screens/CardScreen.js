import { StyleSheet, View } from "react-native";
import CardComponent from "../components/CardComponent";

export default function CardScreen() {
  return (
    <View style={styles.container}>
      <CardComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
