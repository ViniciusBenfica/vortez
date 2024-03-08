import { useStorePlayer } from '@/src/store/players';
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
  const { players, updatePlayer, removePlayer, addPlayer } = useStorePlayer();

  useEffect(() => {
    if (players[players.length - 1].name !== '') {
      addPlayer();
    }
  }, [players[players.length - 1].name]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Adicione os jogadores</Text>
      <ScrollView style={styles.playerContainer}>
        {players.map((player, index) => (
          <View key={index} style={styles.playerRow}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => updatePlayer(text, index)}
              value={player.name}
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
      </ScrollView>
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
    justifyContent: 'space-around',
    paddingVertical: 50,
  },
  playerContainer: {
    width: '100%',
    height: 0,
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
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
});
