
/**
 * 
 * - Dynamic for deferent devices 
 * 
 * - Dimentions API 
 * 
 * 
 * - Platform 
 * - It is used when platform specific code is very less or limited
 * 
 * 
 * - For complex platform specifc code we can use to different components
 * - custome.ios.js // for ios
 * - custome.android.js // for android
 * 
 * 
 */




import React, { useEffect, useState } from "react"
import { Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, Text, useWindowDimensions, View } from "react-native"
import Custome from "./Custome";



export default function DynamicUI(){


    const windowWidth = useWindowDimensions().width;
    const windowHight = useWindowDimensions().height;

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.box,  {
                width: windowWidth > 500 ? "70%" : "90%",
                height: windowHight> 600 ? "60%" : "90",
            }]}>

                <Text style={[styles.text, {
                    fontSize: windowWidth > 500 ? 50 : 24
                }]}>{`Welcome!!! ${Platform.OS === "ios" ? "iOS" :  "Android"}`}</Text>
                <Custome />
            </View>

        </SafeAreaView>
    )
}

// const deviceHeight = Dimensions.get("window").height
// const deviceWidth = Dimensions.get("window").width


const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth: 4,
        borderColor: "red",
        marginTop: StatusBar.currentHeight,
        backgroundColor: "lightpink",
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        // width: deviceWidth > 500 ? "70%" : "90%",
        // height: deviceHeight> 600 ? "60%" : "90",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue"
    },
    text : {
        ...Platform.select({
            ios : {
                fontSize: 24,
                color: "red",
                fontStyle: "italic"
            }, 
            android: {
                fontSize: 14,
                color: "green"
            }
        })
    }
})