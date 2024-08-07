import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = { name, email, password };

    //send a post request to the backend api
    axios
      .post("http://localhost:3000/register", user)
      .then((res) => {
        console.log(res.data);
        Alert.alert(
          "Registration Successful",
          "You have registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "an error occurred during registration."
        );
        console.log("registration failed", error);
      });
  };

  return (
    <SafeAreaView style={styles.saf}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: "https://s3.amazonaws.com/cdn.wireservers.com/Images/Logos/amazon_icon.png",
          }}
        ></Image>
      </View>

      <View>
        <Text style={styles.login}>Register your Account</Text>
      </View>

      <KeyboardAvoidingView>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <MaterialIcons
              style={styles.icons}
              name="person"
              size={24}
              color="black"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.TextInput}
              placeholder="Enter your name"
            ></TextInput>
          </View>

          <View style={styles.form}>
            <MaterialIcons
              style={styles.icons}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.TextInput}
              placeholder="Enter your email"
            ></TextInput>
          </View>

          <View style={styles.form}>
            <MaterialIcons
              style={styles.icons}
              name="lock"
              size={24}
              color="black"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.TextInput}
              placeholder="Password"
            ></TextInput>
          </View>
        </View>
        <View style={styles.choices}>
          <Text>Keep me logged in</Text>
          <Text style={styles.forgot}>Forgot password</Text>
        </View>
        <View style={styles.submit}>
          <Pressable style={styles.submitPress} onPress={handleRegister}>
            <Text style={styles.submitText}>Register</Text>
          </Pressable>

          <Pressable
            style={styles.signupPress}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.signupText}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  saf: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
    marginTop: 50,
  },
  login: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#042E42",
  },
  formContainer: {
    marginTop: 50,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#d0d0d0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  icons: {
    marginLeft: 8,
  },
  TextInput: {
    width: 300,
    marginVertical: 10,
    color: "gray",
    fontSize: 16,
  },
  choices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  forgot: {
    color: "#007fff",
    fontWeight: "500",
  },
  submit: {
    marginTop: 70,
  },
  submitPress: {
    backgroundColor: "#febe10",
    width: 200,
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  signupPress: {
    marginTop: 20,
  },
  signupText: {
    color: "gray",
    textAlign: "center",
    fontSize: 16,
  },
});
