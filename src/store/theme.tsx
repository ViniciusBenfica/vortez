import { type ITheme, theme } from "@/questions";
import { create } from "zustand";

interface IThemes {
	themes: ITheme[];
	selectTheme: string;
	randomWord: string;
	questions: string[];
	currentQuestion: string;
	setTheme: (theme: string) => void;
	getRandomWord: () => void;
	getQuestions: () => void;
	getRandomQuestion: () => void;
}

export const useStoreTheme = create<IThemes>((set) => ({
	themes: theme,
	selectTheme: "",
	randomWord: "",
	currentQuestion: "",
	questions: [],
	setTheme: (theme) => {
		set((oldState) => {
			return { selectTheme: theme };
		});
	},
	getRandomWord: () => {
		set((oldState) => {
			const findTheme =
				oldState.themes.find((theme) => theme.title === oldState.selectTheme) || oldState.themes[0];
			const randomWord = findTheme.theme[Math.floor(Math.random() * findTheme.theme.length)];
			return { randomWord };
		});
	},
	getQuestions: () => {
		set((oldState) => {
			const findTheme =
				oldState.themes.find((theme) => theme.title === oldState.selectTheme) || oldState.themes[0];
			const questions = findTheme.questions;
			return { questions };
		});
	},
	getRandomQuestion: () => {
		set((oldState) => {
			const questionIndex = Math.floor(Math.random() * oldState.questions.length);
			const questions = oldState.questions.filter((_, index) => index !== questionIndex);
			const currentQuestion = oldState.questions[questionIndex];
			return { currentQuestion, questions };
		});
	},
}));
