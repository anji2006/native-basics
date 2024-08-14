import React, { useLayoutEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function AboutScreen(props) {
    const {route, navigation} = props
    const {name} = route.params
    console.log(route)

    // Dynamic title change
    useLayoutEffect(() =>{
        navigation.setOptions({
            title: name
        })
    },[navigation, name])
  return (
    <View style={styles.container}>
        <Text style={styles.text}>About {name}</Text>
        <Button title='update param' onPress={() => navigation.setParams({
            name: "ddddddd"
        })} />
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