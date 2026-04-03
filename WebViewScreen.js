import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function WebViewScreen({ route }) {
  const { title, url } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <WebView source={{ uri: url }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  webview: { flex: 1 },
});
