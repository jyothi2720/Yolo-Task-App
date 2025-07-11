import { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { generateCardData } from "../utils/generateCardData";

export default function CardComponent() {
  const [isFrozen, setIsFrozen] = useState(false);
  const [cardData] = useState(generateCardData());
  const fadeAnim = useState(new Animated.Value(1))[0];

  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
    Animated.timing(fadeAnim, {
      toValue: isFrozen ? 1 : 0.3,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR DIGITAL DEBIT CARD</Text>
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Text style={styles.detail}>
          Number: {isFrozen ? "**** **** **** ****" : cardData.number}
        </Text>
        <Text style={styles.detail}>Name: {cardData.name}</Text>
        <Text style={styles.detail}>Expiry: {cardData.expiry}</Text>
        <Text style={styles.detail}>
          CVV: {isFrozen ? "***" : cardData.cvv}
        </Text>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={toggleFreeze}>
        <Text style={styles.buttonText}>
          {isFrozen ? "Unfreeze" : "Freeze"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50 },
  title: { color: "#fff", fontSize: 18, marginBottom: 10 },
  card: { backgroundColor: "#333", padding: 20, borderRadius: 12, width: 300 },
  detail: { color: "#fff", fontSize: 16, marginBottom: 5 },
  button: {
    marginTop: 20,
    backgroundColor: "#ff4757",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontSize: 16 },
});
