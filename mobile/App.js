import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./routes/AuthNavigator";
import TabNavigator from "./routes/TabNavigator";
import RequestNavigator from "./routes/RequestNavigator";
import CommunityNavigator from "./routes/CommunityNavigator";
import ReservationNavigator from "./routes/ReservationNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          options={{ headerShown: false }}
          component={AuthNavigator}
        />
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={TabNavigator}
        />
        <Stack.Screen
          name="Request"
          options={{ headerShown: false }}
          component={RequestNavigator}
        />
        <Stack.Screen
          name="Community"
          options={{ headerShown: false }}
          component={CommunityNavigator}
        />
         <Stack.Screen
          name="Reservation"
          options={{ headerShown: false }}
          component={ReservationNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
