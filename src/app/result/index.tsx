import { StyleSheet, View } from 'react-native';

export default function Result() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
