/**
 * - At the core layout design in React Native is Flex
 * - flexbox is a powerfull one-dimentinal layout model used to arrange elements with in a container
 * - With Flexbox , you can arrange items either Horizontally or Vertically
 * - easily control space and alignment of items within container.
 * - Two main Entities: Flex container and flex items
 * - Axes : Main Axis and Cross Axis 
 *      * Main Axis:- top to bottom
 *      * Cross Axis:- left to right
 * - flexDirection (column,column-reverse,row, row-reverse)
 * - justifyContent defins alignment along the main Axis
 * - justifyContent - (flex-start,flex-end,center,space-between,space-around, space-evenly)
 * 
 * - AlignItems defines alignmet along the cross axis
 * - alignItems - (stretch, flex-start,flex-end,center,baseline)
 * 
 * - AlignSelf will apply to individual item within a flex container.
 * - control each item independently
 * - alignSelf- (auto, flex-start,flex-end,center)
 * 
 * 
 * 
 */


import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Box from './Box'

export default function Laylout() {
  return (
    <View style={styles.container}>
        <Box style={{backgroundColor: "#232412", alignSelf: "flex-start"}}>Box 1</Box>
        <Box style={{backgroundColor: "#592412" , alignSelf: "flex-end"}}>Box 2</Box>
        <Box style={{backgroundColor: "#256412",  alignSelf: "center"}}>Box 3</Box>
        <Box style={{backgroundColor: "pink"}}>Box 4</Box>
        <Box style={{backgroundColor: "#fff512"}}>Box 5</Box>
        <Box style={{backgroundColor: "#254512"}}>Box 6</Box>
        <Box style={{backgroundColor: "lightblue"}}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        padding: 3,
        flex: 1,
        borderColor: "red",
        borderWidth: 10,
        flexDirection: "column",
        justifyContent: "space-around",
        // alignItems: "center"
    }
})
