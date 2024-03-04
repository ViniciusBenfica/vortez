import { foodsName } from '@/src/questions/foods';
import { useStorePlayer } from '@/src/store/players';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

export default function GetWord() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { getRandomPlayer, randomPlayer, players } = useStorePlayer();
  const [wordIsVisible, setWordIsVisible] = useState(false);
  const [food] = useState(
    foodsName[Math.floor(Math.random() * foodsName.length)],
  );

  useEffect(() => {
    getRandomPlayer();
  }, []);

  const showWord = () => {
    setWordIsVisible(true);
  };

  const goToNextPlayer = () => {
    if (currentIndex + 1 === players.length - 1) {
      router.push('/questions/');
    } else {
      setWordIsVisible(false);
      setCurrentIndex((prevIndex) => ++prevIndex);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{players[currentIndex].name}</Text>

      {wordIsVisible && (
        <Text>
          {players[currentIndex].name !== randomPlayer ? (
            <Text>A palavra é {food}</Text>
          ) : (
            <Text>Você não sabe a palavra</Text>
          )}
        </Text>
      )}

      {wordIsVisible ? (
        <Button title={`Ok`} onPress={() => goToNextPlayer()}></Button>
      ) : (
        <Button
          title={`Eu sou o ${players[currentIndex].name}`}
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
