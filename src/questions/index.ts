import type { ImageSourcePropType } from "react-native";
import { foodsName, foodsQuestions } from "./foods";

export interface ITheme {
	title: string;
	theme: string[];
	icon: ImageSourcePropType;
	questions: string[];
}

export const theme: ITheme[] = [
	{
		title: "Comida",
		theme: foodsName,
		icon: require("../../assets/icons/food.png"),
		questions: foodsQuestions,
	},
	{
		title: "Animal",
		theme: foodsName,
		icon: require("../../assets/icons/animal.png"),
		questions: foodsQuestions,
	},
	{
		title: "Esportes",
		theme: foodsName,
		icon: require("../../assets/icons/sport.png"),
		questions: foodsQuestions,
	},
	{
		title: "Jogos",
		theme: foodsName,
		icon: require("../../assets/icons/game.png"),
		questions: foodsQuestions,
	},
	{
		title: "Música",
		theme: foodsName,
		icon: require("../../assets/icons/music.png"),
		questions: foodsQuestions,
	},
	{
		title: "Televisão",
		theme: foodsName,
		icon: require("../../assets/icons/tv.png"),
		questions: foodsQuestions,
	},
];
