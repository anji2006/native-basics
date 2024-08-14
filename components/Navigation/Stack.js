/**
 * Navigation
 * - mechanism that allows to move across different screens, access features,
 * - go-to solution for handling navigation is the React Navigation library.
 *
 *
 * - Expo has it own buil-in routing feature exclusive to Expo projects
 *
 *
 * React Navigation
 * - provides variety of navigators like Stack, Drawer, and Tab navigators
 * - Stack: used to transition between screens where each new screen is placed on top of a stack
 * - Drawer: render navigation drawer on the side of the screen which can be opened and closed via gestures
 * - Tab: at the bottom of your screen lets you easily switch between different routes.
 * - Need to install react-navigation/native
 * - dependencies : npx expo install react-native-screens react-native-safe-area-context
 *
 * Implementation;
 * - NavigationContainer: Wrapping your app in Navigation Container
 * - Stack Navigation
 *      * when navigation to new screen it will add on top of stack
 *      * when navagation to back top screen will be removed, revealing the previous screen
 *      * Usefull when linear flow of screens is required.
 *      * Two navigators: Stack Navigator and Native Stack Navigator.
 *      - The Stack Navigator is a JavaScript based navigator which offers a high degree of customization, making it a great choice for app require a unique navigation experience.
 *      - However, this comesat the cost of performance especially when compared to its counter part, the Native Stack Navigator.
 *      - Native Stack Navigator leverages the native navifation constructs of iOS and Android, providing better performance and a more native feel to the trasitions and gestures.
 *      # npm install @react-navigation/native-stack
 *
 *      * navigation: destructure from props navigation.navigate("route") -- used in main screen component
 *      * useNavitation(): from react-navigation/native     --we can use any where
 *      * route: destructure from props provided to all screen component to get data between screens
 *      * navitagion.navigate("screen", {}): {} we can send date bw screens
 *      * setParams: navgation.setParams({}) update currnt params
 *      * we can send initialParams also
 *      * options to custamize navigation header
 *      * screenOptions : this will apply for all screens inside that navigator
 *      * dynamic screen title change: useLayoutEffect and update navigation.setOptions({title: "latest"})
 *
 *
 *
 */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, StyleSheet, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0651ae",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "700" },
          headerRight: () => (
            <Pressable onPress={() => alert("Alertttt")}>
              <Text style={styles.menu}> Menu </Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome to my place",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            name: "Anjiiiii",
          }}
          // To update dynamic title
        //   options={({route}) => ({
        //     title: route.params.name
        //   })}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menu: {
    color: "#fff",
    fontWeight: "700",
  },
});
