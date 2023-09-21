import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Project() {
  return (
    <View style={styles.container}>
      <Text>Project 1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})