/**
 * KeyboardAvoidingView
 * - it is used to avoid keyboard overlaping on content.
 * - props
 *      * behavior: avoid missing content at end by giving padding
 *      * keyboardVerticalOffset: set and offset for bottom of the content.
 *
 */

import React, { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validationForm = () => {
    let errors = {};
    if (!username) errors.username = "username is reuired";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit =() => {
    if(validationForm()) {
      console.log("Submitted", username, password)
      setErrors({})
      setUsername("")
      setPassword("")
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 100}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.lable}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Enter your username"
          onChangeText={setUsername}
        />
        {errors?.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}
        <Text style={styles.lable}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter your password"
          onChangeText={setPassword}
          secureTextEntry
        />

        {errors?.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
        <Button
          style={styles.button}
          title="Login"
          onPress={handleSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "red",
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
  },
  lable: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "600",
    marginTop: 15
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    // marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 50,
  },
  image: {
    width: 300,
    height: 300,
  },
  errorText: {
    color: "red",
    marginBottom: 12,
  },
});
