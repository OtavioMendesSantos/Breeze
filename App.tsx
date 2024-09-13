import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import HomeScreen from "./src/pages/Home";
import User from "./src/pages/User";

const Stack = createNativeStackNavigator();

export default function Home() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Brizze">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "User - Config.",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
