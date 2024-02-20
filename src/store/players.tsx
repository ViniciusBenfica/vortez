import { create } from 'zustand';

interface IPlayers {
  players: string[];
  updatePlayer: (text: string, index: number) => void;
  removePlayer: (index: number) => void;
  addPlayer: () => void;
}

export const useStore = create<IPlayers>((set) => ({
  players: [''],
  updatePlayer: (text: string, index: number) => {
    set((oldState) => {
      const newPlayers = [...oldState.players];
      newPlayers[index] = text;
      return { players: newPlayers };
    });
  },
  removePlayer: (index: number) => {
    set((oldState) => {
      const newPlayers = oldState.players.filter((_, i) => i !== index);
      if (newPlayers.length === 0) {
        newPlayers.push('');
      }
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
}));
