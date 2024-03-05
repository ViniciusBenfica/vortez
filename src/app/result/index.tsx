import { useStorePlayer } from '@/src/store/players';
import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Result() {
  const { players, clearVotes } = useStorePlayer();

  return (
    <View style={styles.container}>
      <Text>
        O mais votado foi{' '}
        {
          players.reduce((prev, current) =>
            prev.votes > current.votes ? prev : current,
          ).name
        }
      </Text>
      <Link href='/' asChild>
        <Button title='Jogar novamente' onPress={clearVotes} color='#ff4444' />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
