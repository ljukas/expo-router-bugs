import {Pressable, StyleSheet} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import {Text, View} from '../../components/Themed';
import {Link, useRouter} from "expo-router";

export default function TabOneScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
        <Pressable onPress={() => router.push('/(app)/project/1')}>
          <Text style={styles.title}>Press me</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
