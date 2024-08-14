/**
 * 
 * Drawer Navigation introduces a hidden menu , sliding from either sides of the screen
 * It is perticularly benificial in apps with multiple main sections that require a neat and organized navigation structure.
 */

import  'react-native-gesture-handler'
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native'

import { createDrawerNavigator } from "@react-navigation/drawer"
import DashboardScreen from './screens/DashboardScreen'
import SettingsScreen from './screens/SettingsScreen'

const Drawer = createDrawerNavigator()

export default function Drawer1() {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{
                    title: "My dash",
                    drawerLabel: "My dash label",
                    drawerActiveBackgroundColor: "#ff33ff",
                    drawerActiveTintColor: "#fff",
                    drawerContentStyle :{
                        backgroundColor: "#f5f5f5"
                    }
                }} />
                <Drawer.Screen name="Settings" component={SettingsScreen}  />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}