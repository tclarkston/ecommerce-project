import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const LoginScreen = () => {
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
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.login}>Login to your Account</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.form}>
            <MaterialIcons name="email" size={24} color="black" />
            <TextInput placeholder="Email"></TextInput>
          </View>

          <View style={styles.form}>
            <MaterialIcons name="lock" size={24} color="black" />
            <TextInput placeholder="Password"></TextInput>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  form: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#d8d8d8",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  formContainer: {
    marginTop: 70,
  },
});
