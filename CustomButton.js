import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function CustomButton({ onPress, title, size, backgroundColor, style, textStyle }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        size === "sm" && { paddingHorizontal: 12, paddingVertical: 10 },
        backgroundColor && { backgroundColor },
        style,
      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    alignSelf: "center",
    marginVertical: 8,
    elevation: 6,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
