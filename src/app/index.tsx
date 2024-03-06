import { router } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Image
            source={require('../../assets/images/logo.webp')}
            style={styles.image}
          />
        </View>
        <TouchableOpacity
          onPress={() => router.push('/players/')}
          style={styles.start}
        >
          <Text style={styles.textStart}>Jogar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  body: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  start: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#9966cc',
    shadowColor: '#9966cc',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,

    borderWidth: 1,
    width: '80%',
    height: 60,
    borderRadius: 10,
  },
  textStart: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
  },
});
