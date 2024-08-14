import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function DashboardScreen(props) {
    const {navigation} = props
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Dashboard Screen</Text>
        <Button title='toggle Drawer' onPress={() => navigation.toggleDrawer()} />
        <Button title='Settings' onPress={() => navigation.jumpTo("Settings")} />
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