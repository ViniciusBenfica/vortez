import { create } from 'zustand';

interface IPlayers {
  players: string[];
  updatePlayer: (text: string, index: number) => void;
  removePlayer: (index: number) => void;
  addPlayer: () => void;
  randomPlayer: string;
  setRandomPlayer: () => void;
}

export const useStorePlayer = create<IPlayers>((set) => ({
  players: [''],
  randomPlayer: '',
  updatePlayer: (text: string, index: number) => {
    set((oldState) => {
      if (text === '') {
        const newPlayers = oldState.players.filter((_, i) => i !== index);
        return { players: newPlayers };
      } else {
        const newPlayers = [...oldState.players];
        newPlayers[index] = text;
        return { players: newPlayers };
      }
    });
  },
  removePlayer: (index: number) => {
    set((oldState) => {
      const newPlayers = oldState.players.filter((_, i) => i !== index);
      return { players: newPlayers };
    });
  },
  addPlayer: () => {
    set((oldState) => {
      if (oldState.players[oldState.players.length - 1] !== '') {
        return { players: [...oldState.players, ''] };
      }
      return oldState;
    });
  },
  setRandomPlayer: () => {
    set((oldState) => {
      const randomPlayer =
        oldState.players[
          Math.floor(Math.random() * oldState.players.length - 1)
        ];
      return { randomPlayer: randomPlayer };
    });
  },
}));
