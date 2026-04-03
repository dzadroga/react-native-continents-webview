import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import WebViewScreen from "./WebViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Continents" component={HomeScreen} />
        <Stack.Screen name="WebView" component={WebViewScreen} options={{ title: "Wikipedia" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
