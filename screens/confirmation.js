import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function confirmation({navigation}) {
  return (
    <View style={styles.container}>
      <Text>🎉🎉🎉Order Confirmed!🎉🎉🎉{"\n"}Thank you for your order, we will contact you as soon as your package is shipped, Purchase Information will be sent to your email.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});