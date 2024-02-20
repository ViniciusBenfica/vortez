import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
} from 'react-native';

export default function Members() {
  const [players, setPlayers] = useState(['']);

  useEffect(() => {
    if (players[players.length - 1] !== '') {
      setPlayers([...players, '']);
    }
  }, [players]);

  const updatePlayer = (text: string, index: number) => {
    const newPlayers = [...players];
    newPlayers[index] = text;
    setPlayers(newPlayers);
  };

  const removePlayer = (index: number) => {
    const newPlayers = players.filter((_, i) => i !== index);
    if (newPlayers.length === 0) {
      newPlayers.push('');
    }
    setPlayers(newPlayers);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Adicione os jogadores</Text>
      {players.map((player, index) => (
        <View key={index} style={styles.playerContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => updatePlayer(text, index)}
            value={player}
            placeholder={`Jogador ${index + 1}`}
          />
          {players.length > 1 && player !== '' && (
            <Button
              title='Remover'
              onPress={() => removePlayer(index)}
              color='#ff4444'
            />
          )}
        </View>
      ))}
      <Link href='play'>
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
    flex: 1, // Permite que o input ocupe a maior parte do espaço horizontal
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  playerContainer: {
    flexDirection: 'row', // Posiciona o input e o botão lado a lado
    alignItems: 'center',
    width: '90%',
  },
});
