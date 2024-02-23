import { useStore } from '@/src/store/players';
import { Link } from 'expo-router';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
} from 'react-native';

export default function Players() {
  const { players, updatePlayer, removePlayer, addPlayer } = useStore();

  useEffect(() => {
    addPlayer();
  }, [players, addPlayer]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Adicione os jogadores</Text>
      {players.map((player, index) => (
        <View key={index} style={styles.playerContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => updatePlayer(text, index)}
            value={player}
            placeholder={`Novo jogador`}
          />
          {players.length - 1 !== index && (
            <Button
              title='Remover'
              onPress={() => removePlayer(index)}
              color='#ff4444'
            />
          )}
        </View>
      ))}
      <Link href='/getWord/' asChild>
        <Button title='Começar partida' color='#ff4444' />
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
});
