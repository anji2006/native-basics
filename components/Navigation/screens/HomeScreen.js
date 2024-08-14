import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen(props) {
    // Anyone of below method will work
    // const {navigation} = props
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Button title='Go to About' onPress={() => navigation.navigate("About", {name: "Pottii"})}></Button>
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