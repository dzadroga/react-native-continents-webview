import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CustomButton from "./CustomButton";

export default function HomeScreen({ navigation }) {
  //State object as array of links
  const [links] = useState([
    { id: "1", title: "Africa", url: "https://en.wikipedia.org/wiki/Africa", color: "#0d6efd" },
    { id: "2", title: "Antarctica", url: "https://en.wikipedia.org/wiki/Antarctica", color: "#6c757d" },
    { id: "3", title: "Asia", url: "https://en.wikipedia.org/wiki/Asia", color: "#198754" },
    { id: "4", title: "Europe", url: "https://en.wikipedia.org/wiki/Europe", color: "#dc3545" },
    { id: "5", title: "North America", url: "https://en.wikipedia.org/wiki/North_America", color: "#ffc107" },
    { id: "6", title: "South America", url: "https://en.wikipedia.org/wiki/South_America",color: "#0dcaf0" },
    { id: "7", title: "Australia", url: "https://en.wikipedia.org/wiki/Australia_(continent)", color: "#866c91" },
  ]);

  const renderItem = ({ item }) => (
    <CustomButton
      title={item.title}
      size="sm"
      backgroundColor={item.color}
      onPress={() => navigation.navigate("WebView", { title: item.title, url: item.url })}
      style={styles.button}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContent: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
  },
  button: {
    minWidth: 260,
    marginVertical: 8,
  },
});
