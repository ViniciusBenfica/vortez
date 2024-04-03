import { foodsName } from "@/questions/foods";
import { useStorePlayer } from "@/store/players";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ContainerComponent from "../components/container";

export default function GetWord() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { getRandomPlayer, randomPlayer, players } = useStorePlayer();
	const [wordIsVisible, setWordIsVisible] = useState(false);
	const [food] = useState(foodsName[Math.floor(Math.random() * foodsName.length)]);

	useEffect(() => {
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
						{players[currentIndex].name !== randomPlayer ? (
							<View style={styles.containerWord}>
								<Text style={styles.title}>A palavra é</Text>
								<View style={styles.word}>{food}</View>
							</View>
						) : (
							<View style={styles.containerWord}>
								<Text style={styles.title}>A palavra é</Text>
								<View style={styles.word}>Não sabe</View>
							</View>
						)}
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
	},
	word: {
		fontFamily: "BebasNeue_400Regular",
		alignItems: "center",
		justifyContent: "center",
		color: "#FFFFFF",
		fontSize: 64,
		backgroundColor: "#ffffff26",
		borderColor: "#FFFFFF",
		borderWidth: 2,
		borderRadius: 12,
		width: "70%",
		height: 90,
	},
});
