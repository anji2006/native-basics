/**
 * View is small rectangular element on the screen which can display text,images or respond to user input
 * Android - views are written in kottlin or java
 * Ios -  views are written swift or Objective-c
 * React Native- Views using javascript through React Components
 * --At runtime, React Native generates the corresponding Android and iOS views for these components.
 *
 * React Native     Android                 iOS
 * <View>         <ViewGroup >        <UIView >
 * <Text>         <TextView>          <UITextView>
 * <Image>        <ImaeView>          <UIImageView>
 * <ScrollView>   <ScrollView>        <UIScrollView>
 * <TextInput>    <EditText>          <UITextField>
 *
 *  Note;- View,Text,Image needs to import from react-native library to use in code.
 *
 *
 * VIEW
 * - It functions as container that supports layout using flexbox,styling, touch handling, and accessibility controls.
 * - It can have 0 or more childrens of any Type.
 *
 * TEXT
 * - Component for displaying Text
 * - Supports nesting, styling and touch handling
 * - Depending on target platform, React Native will translate this component to either a UITextView(iOS) or TextView(Android) or p(web)
 *
 * IMAGE
 * - Enables to display various images, including
 *      * Staic Images
 *      * Network Images
 *      * Images from the local dick, such as camera roll
 * - React native seamlessly translate this Image tag to platform specific components.
 * - for remote <Image source={{uri: "https://url.png"}} />
 *
 * ImageBackground
 * - for adding background image
 *
 * Button
 * - button allows to trigger actions
 * - The Button Component has platform-specific rendering for iOS and Android
 * - props:-  onPress , color, disabled
 *
 * Pressable
 * - Pressable is wrapper component that detects various stages of press interactions on its defined children
 * - can create custom button using Pressable
 * -    * onPressIn is called when press is activated
 *      * onPressOut is called when press is gesture is deactivated
 *      * onLongPress is triggered when press is held for longer than 500 milliseconds.
 *
 * Model
 * - Model is a screen overlays the app content to provied important imformation or promt the user for decision.
 * - Since they are purposefully interruptive make sure you use then only when necessary.
 *      * visible to show model or not (default true)
 *      * onRequestClose
 *      * animationType (none,slide,fade)
 *      * presentationStyle (fullScreen,formSheet,pageSheet) [effects on iOS not android]
 *
 *
 * StatusBar
 * - StatusBar component allow to control the application's status bar
 * - Status Bar is at Top of the screen,that displays network status,Time,wifi...etc
 *      * backgroundColor (only for Android)
 *      * barStyle (default,dark-content,light-content)
 *      * hidden (true,false)
 * 
 * ActivityIndicator
 * - displays circular loading indicator
 * - used to inform users about status of ongoing process, such as loading , subbmitting a form, saving updates.
 *      * size,color,animating
 * 
 * Alert
 * - launches a dialog with title and message.
 * - Optionally, you can also specify list of buttons
 * 
 */

import React, { useState } from "react";
import {
    ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const logoImg = require("../assets/adaptive-icon.png");

export default function CoreComponents() {
  const [isModelVisible, setIsModelVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 30 }}>
      {/* <Text>
            <Text style={{color: "#fff"}}>
                Hellooo
            </Text>
            Anji
        </Text>
        <View style={{height:200, width: 200, backgroundColor: "lightgreen"}}>
            <Image source={logoImg} style={{width: 50, height: 50}}></Image>
            <Image source={{uri: "https://picsum.photos/200.jpg"}} style={{width: 50, height: 50}}/>
        </View>
        <View style={{height:200, width: 200, backgroundColor: "lightblue"}}>
            <ImageBackground source={logoImg} style={{flex:1}}>
                <Text>Image text on image</Text>
            </ImageBackground>
        </View> */}

      {/* scroll view components */}

      {/* <ScrollView >
            <Image source={logoImg} style={{width: 200,height: 200}} />
            <Text>
                Network concepts encompass the fundamental principles and technologies that 
                enable communication and data exchange between devices over a network. These 
                concepts include understanding the architecture and topologies of networks, 
                such as LAN (Local Area Network) and WAN (Wide Area Network), which define the
                scope and scale of the network. Protocols like TCP/IP (Transmission Control Protocol/Internet Protocol) 
                govern how data is transmitted across the network, ensuring reliability and proper routing of information. 
                Additionally, concepts like IP addressing, DNS (Domain Name System), and network security play crucial roles in 
                maintaining efficient and secure communication. Understanding these concepts is essential for designing, managing, 
                and troubleshooting networks effectively.
            </Text>
            <Image source={logoImg} style={{width: 200,height: 200}} />
            <Text>
                Network concepts encompass the fundamental principles and technologies that 
                enable communication and data exchange between devices over a network. These 
                concepts include understanding the architecture and topologies of networks, 
                such as LAN (Local Area Network) and WAN (Wide Area Network), which define the
                scope and scale of the network. Protocols like TCP/IP (Transmission Control Protocol/Internet Protocol) 
                govern how data is transmitted across the network, ensuring reliability and proper routing of information. 
                Additionally, concepts like IP addressing, DNS (Domain Name System), and network security play crucial roles in 
                maintaining efficient and secure communication. Understanding these concepts is essential for designing, managing, 
                and troubleshooting networks effectively.
            </Text>
        </ScrollView> */}

      <Button
        title="Click Me"
        color="midnightblue"
        // disabled
        onPress={() => {
          console.log("Button Pressed");
          setIsModelVisible(true);
        }}
      />

      {/* <Pressable onPress={() => console.log("image pressed")}>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Text pressed")}>
        <Text>
          Network concepts encompass the fundamental principles and technologies
          that enable communication and data exchange between devices over a
          network. These concepts include understanding the architecture and
          topologies of networks, such as LAN (Local Area Network) and WAN (Wide
          Area Network), which define the scope and scale of the network.
          Protocols like TCP/IP (Transmission Control Protocol/Internet
          Protocol) govern how data is transmitted across the network, ensuring
          reliability and proper routing of information. Additionally, concepts
          like IP addressing, DNS (Domain Name System), and network security
          play crucial roles in maintaining efficient and secure communication.
          Understanding these concepts is essential for designing, managing, and
          troubleshooting networks effectively.
        </Text>
      </Pressable> */}

      {/* <Modal
        visible={isModelVisible}
        onRequestClose={() => setIsModelVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{flex:1,padding:60, backgroundColor: "lightblue" }}>
          <Text>Model content</Text>
          <Button
            title="Close"
            onPress={() => setIsModelVisible(false)}
            color="midnightblue" 
          />
        </View>
      </Modal> */}
      {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content" /> */}

      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />

      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")}  />
      <Button title="Alert2" onPress={() => Alert.alert("Invalid Data", "DOB incorrect")}  />
      
      <Button title="Alert 3" onPress={() => Alert.alert("Invalid Data", "DOB incorrect", [
        {
            text: "Cancel",
            onPress: () => console.log("cancel pressed")
        },
        {
            text: "Ok",
            onPress: () => console.log("Ok pressed")
        }
      ])}  />
      
    </View>
  );
}
