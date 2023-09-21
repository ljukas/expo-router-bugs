import {Pressable, StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';
import {useRouter} from "expo-router";

export default function TabOneScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/(app)/project/1')}>
        <Text style={styles.title}>Press me for cyclical error</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/slotIssue/header')}>
        <Text style={styles.title}>Link to Slot intercepting navigation.setOptions</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 40
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
