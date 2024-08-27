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
 * Relative and Absolute
 * - this layout depends on position property which defines how an element should display within it's parent container.
 * - position: (relative,absolute)
 * - relative (default)
 *      * It will follow normal flow of layout
 *      * It can offsed to top,bottom,left,right
 *      * Importantly it willn't effect any sibling position or parent .
 *      * It will take it's original space.
 * - absolute 
 *      * It will not follow normal flow of layout.
 *      * It is laid out independently with it siblings.
 *      * positive is determined by top,bottom,left,right which specific coordinates relative to it's parent container
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
        <Box style={{backgroundColor: "#232412", top: 50, left: 50}}>Box 1</Box>
        <Box style={{backgroundColor: "#592412" }}>Box 2</Box>
        <Box style={{backgroundColor: "#256412"}}>Box 3</Box>
        <Box style={{backgroundColor: "pink",position: "absolute", top: 100, left: 50}}>Box 4</Box>
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
        // flexDirection: "column",
        // justifyContent: "space-around",
        alignItems: "flex-start"
    }
})
