import { useStorePlayer } from "@/store/players";
import { useStoreTheme } from "@/store/theme";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ContainerComponent from "../components/container";
import TransparentButtonComponent from "../components/transparentButton";

export default function GetWord() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { getRandomPlayer, randomPlayer, players } = useStorePlayer();
	const [wordIsVisible, setWordIsVisible] = useState(false);
	const { getRandomWord, randomWord } = useStoreTheme();

	useEffect(() => {
		getRandomWord();
		getRandomPlayer();
	}, []);

	const showWord = () => {
		setWordIsVisible(true);
	};

	const goToNextPlayer = () => {
		if (currentIndex + 1 === players.length - 1) {
			router.push("/pages/questions");
		} else {
			setWordIsVisible(false);
			setCurrentIndex((prevIndex) => ++prevIndex);
		}
	};

	return (
		<ContainerComponent
			actionFooterButton={wordIsVisible ? () => goToNextPlayer() : () => showWord()}
			textFooterButton={wordIsVisible ? "Continuar" : "Sim, sou eu!"}
		>
			<View style={styles.container}>
				<Text style={styles.title}>{`Voce é o ${players[currentIndex].name}?`}</Text>
				{wordIsVisible && (
					<>
						<View style={styles.containerWord}>
							<Text style={styles.title}>A palavra é</Text>
							<View style={styles.wordContainer}>
								<TransparentButtonComponent>
									<Text style={styles.word}>
										{players[currentIndex].name !== randomPlayer ? randomWord : "Não sabe"}
									</Text>
								</TransparentButtonComponent>
							</View>
						</View>
					</>
				)}
			</View>
		</ContainerComponent>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		height: "50%",
		justifyContent: "space-between",
	},
	title: {
		fontFamily: "BebasNeue_400Regular",
		fontSize: 48,
		color: "white",
	},
	containerWord: {
		width: "100%",
		alignItems: "center",
		gap: 16,
	},
	wordContainer: {
		width: "70%",
		height: 90,
	},
	word: {
		fontFamily: "BebasNeue_400Regular",
		color: "#FFFFFF",
		fontSize: 64,
		textAlign: "center",
	},
});
