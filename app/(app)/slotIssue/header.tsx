import {StyleSheet, Text, View} from "react-native";
import React, {useCallback} from "react";
import {useFocusEffect, useNavigation} from "expo-router";

export default function Header() {
  const navigation = useNavigation()

  useFocusEffect(useCallback(() => {
    navigation.setOptions({
      title: 'Valid'
    })
  }, []))

  return (

    <View style={styles.container}>
      <Text>Header should be set to 'Valid'</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})