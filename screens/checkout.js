import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,} from "react-native";


export function checkout({navigation}) {

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#f7f7f7"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number."
          placeholderTextColor="#f7f7f7"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#f7f7f7"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address 1."
          placeholderTextColor="#f7f7f7"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address 2."
          placeholderTextColor="#f7f7f7"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

     

      

      <TouchableOpacity style={styles.checkBtn}>
        <Text style={styles.text}
        onPress= {() => {
            navigation.navigate("confirmation")
        }}
        
        >CHECKOUT</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,

  },

  inputView: {
    borderColor:"gold",
    backgroundColor: "black",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    color: "white",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  checkBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#e3963e",
  },
  
});