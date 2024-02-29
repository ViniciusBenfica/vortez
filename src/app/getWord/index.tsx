import { foodsName } from '@/src/questions/foods';
import { useStore } from '@/src/store/players';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

export default function GetWord() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setRandomPlayer, randomPlayer, players } = useStore();
  const [wordIsVisible, setWordIsVisible] = useState(false);
  const [food] = useState(
    foodsName[Math.floor(Math.random() * foodsName.length)],
  );

  useEffect(() => {
    setRandomPlayer();
  }, []);

  const showWord = () => {
    setWordIsVisible(true);
  };

  const goToNextPlayer = () => {
    setWordIsVisible(false);
    setCurrentIndex((prevIndex) => {
      const nextIndex = ++prevIndex;
      if (nextIndex === players.length - 1) {
        router.push('/');
        return 0;
      } else {
        return nextIndex;
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{players[currentIndex]}</Text>

      {wordIsVisible && (
        <Text>
          {players[currentIndex] !== randomPlayer
            ? food
            : 'Você não sabe a palavra'}
        </Text>
      )}

      {wordIsVisible ? (
        <Button title={`Ok`} onPress={() => goToNextPlayer()}></Button>
      ) : (
        <Button
          title={`Eu sou o ${players[currentIndex]}`}
          onPress={() => showWord()}
        ></Button>
      )}
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
