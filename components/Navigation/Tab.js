/**
 * - npm install @react-navigation/bottom-tabs
 * - Nestede or combined navigations.
 */

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/Profile";
import CourseListScreen from "./screens/CourseList";
import SettingsScreen from "./screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons"
import Navigation from "./Stack";

const Tab = createBottomTabNavigator();

export default function Tab1() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelPosition: "below-icon", // below-icon or beside-icon
        tabBarShowLabel: true,
        tabBarActiveTintColor : "purple"
      }}>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen}  options={{
            tabBarLabel: "My profile",
            tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color}/>,
            tabBarBadge: 4
        }}/>
        <Tab.Screen name="Couse List" component={CourseListScreen} />
        
        <Tab.Screen name="Home" component={Navigation} options={{
            headerShown: false
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
