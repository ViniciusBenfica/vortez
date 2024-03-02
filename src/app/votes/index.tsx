import { useStorePlayer } from '@/src/store/players';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Button, View } from 'react-native';

export default function Vots() {
  const [startVotes, setStartVotes] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { players } = useStorePlayer();

  return (
    <View style={styles.container}>
      {!startVotes ? (
        <View>
          <Text>Hora de votar quem não sabe a palavra</Text>
          <Button
            title='Próxima'
            onPress={() => {
              setStartVotes(true);
            }}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>{players[currentIndex]}</Text>
          <ScrollView>
            <Text>Quem não sabe a palavra?</Text>
            {players.slice(0, -1).map((player, index) => {
              if (index !== currentIndex) {
                return (
                  <Button
                    key={index}
                    title={player}
                    onPress={() => {
                      if (currentIndex + 1 === players.length - 1) {
                        router.push('/result/');
                      } else {
                        setCurrentIndex((oldIndex) => ++oldIndex);
                      }
                    }}
                  />
                );
              }
            })}
          </ScrollView>
        </View>
      )}
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
