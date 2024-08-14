/**
 * In web we have many user input fields ex:- input fields,text areas, dropdown menus, checkboxes, radio groups ..... many more
 * The core React Native library only provides TextInput and Switch
 *
 * - Expo expands our toolkit, offering additional components like checkboxes and date pickers throught the Expo SDK.
 *
 * Forms
 * - Managing Form State: Controlling the dynamic data within our forms
 * - Handling Form Validation: Ensuring the integrity and validity of the user's input
 * - Displaying Validation Messages: Communicationg the results of validation to the user
 * - submitting Form Data : Sending the collected information where it needs to go
 *
 *
 *
 * TextInput
 * - It is fundamtal building block for user input in React Native
 * - It allows to enter text or other type of data into app.
 * - props
 *      * value : to control value
 *      * onChangeText: takes callback invokes with input text as argument.
 *      * placeholder: to example
 *      * secureTextEntry; user input willbe hidden
 *      * keyboardType: we can show the different keyboards based requirement (numeric)
 *      * autoCorrect: auto correcting the sentance
 *      * autoCapitalize: auto capitalizing the Charecter based on type
 *      * multiline: to entermultiline text input
 *
 *
 *
 * Switch
 * - it is used for toggle into your app's user intergace
 * - used for binary choices(yes/no, on/off, enabling/disabling)
 * - props
 *      * value: true / false
 *      * onValueChange: takes callback to invoke when toggle
 *      * trackColor: takes object { false: "color", true: "color"}
 *      * thumbColor: takes color
 *
 *
 *
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Inputs() {
  const [name, setName] = useState("anji");
  const [isDark, setIsDark] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="example@gmail.com"
        autoCapitalize="none"
        autoCorrect={false}
        // secureTextEntry
        // keyboardType="numeric"
      />
      <Text> My Name: {name}</Text>

      <TextInput
        style={[styles.input, styles.multiInput]}
        placeholder="message"
        multiline
      />
      <View style={styles.switchContainer}>
        <Text>Dark Mode</Text>
        <Switch
          value={isDark}
          onValueChange={() => setIsDark(!isDark)}
          trackColor={{ false: "#767577", true: "red" }}
          thumbColor="#f4f3f4"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "red",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 5,
    padding: 5,
    borderWidth: 2,
  },
  multiInput: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
