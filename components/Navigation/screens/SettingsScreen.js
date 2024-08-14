import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function SettingsScreen(props) {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        fontWeight: "700"
    }
})