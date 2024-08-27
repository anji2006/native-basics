/**
 * 
 * Styling.
 * - React native doesn't use css for styling.
 * - Style using javascript 
 * - Names are writtern in camelCase (backgroundColor instead of background-color)
 * - Inline Styles or StyleSheet API (provided by react native)
 * 
 * StyleSheet
 * - multiple styles need to use Array of styles [style1, style2]
 * - last style in Array takes priority.
 * 
 * Box Model
 * - Box Model will have (width,height,margin,border,padding,content)
 * - Width/height (%,int values)
 * - paddingHorizontal,paddingVertical
 * - marginHorizontal, marginVertical
 * - borderWidth,borderColor,
 * - borderRadius for Text Component will apply on Android only,
 * - borderRadius for View Component will apply for Both
 * - box-shadow: h-offset v-offset blur spreed color
 * 
 * BOX SHADOW
 * - There is no common styles for Both related to box shadow
 * - boxshadow styles below example will apply only for iOS
 *  shadowColor: "#333333", // only color will apply for both 
    shadowOffset: {
        width: 6,
        height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
 * -  For Android Need to use Elivation which internally uses elevation API
 */

/**
 * Style Inheritence
 * - Inheritance From View to Text won't work
 * - Inheritance From Text to Text will work in React Native
 * 
 * 
 * 
 * 
 */


import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Styling() {
  return (
    <View style={styles.container}>
        <View style={styles.darkMode}>
            <Text style={styles.darkModeText}>Inheritence
                <Text style={styles.boldText}> Bolt Text</Text>
            </Text>
        </View>
        <View style={[ styles.lightBlueBox, styles.box, styles.shadowBox ]}>
            <Text>light blues</Text>
        </View>
        <View style={[styles.box, styles.lightGreenBox, styles.androidShadow]}>
            <Text>light  GREEN</Text>
        </View>
    </View>
  )
}

const styles =  StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: "plum",
        padding: 60
    },
    darkMode: {
        backgroundColor: "black",
    },
    darkModeText:{
        color: "white"
    },
    boldText: {
        fontWeight: "bold"
    },
    box : {
        height: 250, 
        width: 250,
        // padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "pink",
        borderWidth: 2,
        borderColor: "purple",
        borderRadius: 5
    },
    lightBlueBox: {
        backgroundColor: "lightblue",
    },
    lightGreenBox: {
        backgroundColor: "lightgreen",
    },
    shadowBox : {
        shadowColor: "#333333",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4
    },
    androidShadow:{
        elevation: 20
    }
})