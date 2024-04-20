import { foodsQuestions } from "@/questions/foods";
import { useStorePlayer } from "@/store/players";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ContainerComponent from "../components/container";

export default function Questions() {
	const { players } = useStorePlayer();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [questions, setQuestions] = useState([...foodsQuestions]);
	const [currentQuestion, setCurrentQuestion] = useState("");

	const getRandomQuestion = () => {
		const initialQuestionIndex = Math.floor(Math.random() * questions.length);
		setQuestions(questions.filter((_, index) => index !== initialQuestionIndex));
		setCurrentQuestion(questions[initialQuestionIndex]);
	};

	useEffect(() => {
		getRandomQuestion();
	}, []);

	const nextQuestion = () => {
		if (players.length - 1 === currentIndex + 1) {
			router.push("/pages/votes");
		} else {
			getRandomQuestion();
			setCurrentIndex((oldIndex) => ++oldIndex);
		}
	};

	return (
		<ContainerComponent actionFooterButton={nextQuestion} textFooterButton="Próxima">
			<View style={styles.container}>
				<View style={styles.nameContainer}>
					<Text style={styles.title}>Pergunta para</Text>
					<Text style={styles.title}>{players[currentIndex].name}</Text>
				</View>
				<View style={styles.questionContainer}>
					<Text style={styles.question}>{currentQuestion}</Text>
				</View>
			</View>
		</ContainerComponent>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		height: "60%",
		justifyContent: "space-between",
	},
	nameContainer: {
		alignItems: "center",
	},
	title: {
		fontFamily: "BebasNeue_400Regular",
		fontSize: 48,
		color: "white",
	},
	questionContainer: {
		alignItems: "center",
		justifyContent: "flex-start",
		width: "100%",
		height: "50%",
	},
	question: {
		fontFamily: "BebasNeue_400Regular",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		color: "#FFFFFF",
		fontSize: 40,
		backgroundColor: "#ffffff26",
		borderColor: "#FFFFFF",
		borderWidth: 2,
		borderRadius: 12,
		padding: 10,
		width: "70%",
	},
});
