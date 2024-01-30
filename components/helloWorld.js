import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const tipPercentages = [0, 10, 15, 20];

  const calculateTotal = () => {
    const amountNumeric = parseFloat(amount);
    const tipAmount = (amountNumeric * selectedTip) / 100;
    return amountNumeric + tipAmount;
  };

  const handleTipPress = (percentage) => {
    setSelectedTip(percentage);
  };

  const handlePayPress = () => {
    const totalAmount = calculateTotal();
    // Perform payment logic (placeholder)
    alert(`Paid: $${totalAmount.toFixed(2)}`);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor="#46A29F" />
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
        <View style={styles.tipButtonsContainer}>
          {tipPercentages.map((percentage) => (
            <TouchableOpacity
              key={percentage}
              style={[
                styles.tipButton,
                selectedTip === percentage && styles.selectedTipButton,
              ]}
              onPress={() => handleTipPress(percentage)}
            >
              <Text style={styles.tipButtonText}>{`${percentage}%`}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Payment:</Text>
          <Text style={styles.totalAmount}>${calculateTotal().toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handlePayPress}>
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    textAlign: "center",
  },
  tipButtonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tipButton: {
    backgroundColor: "#46A29F",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedTipButton: {
    backgroundColor: "#204051",
  },
  tipButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  totalContainer: {
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#46A29F",
  },
  payButton: {
    backgroundColor: "#46A29F",
    padding: 15,
    borderRadius: 8,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
