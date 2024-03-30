import { useStorePlayer } from "@/src/store/players";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/button";
import ContainerComponent from "../components/container";

export default function Vots() {
	const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number>(-1);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const { players, votedPlayer } = useStorePlayer();

	return (
		<ContainerComponent
			actionFooterButton={() => {
				votedPlayer(selectedPlayerIndex);
				setCurrentIndex((oldIndex) => ++oldIndex);
				setSelectedPlayerIndex(-1);
				if (currentIndex + 1 === players.length - 1) {
					router.push("/pages/result");
				}
			}}
			textFooterButton="Confirmar"
			showFooterButton={selectedPlayerIndex > -1}
		>
			<View style={styles.container}>
				<Text style={styles.title}>{players[currentIndex].name}</Text>
				<Text style={styles.title}>Quem não sabe a palavra?</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={styles.playerContainer}
				>
					{players.slice(0, -1).map((player, index) => {
						if (index !== currentIndex) {
							return (
								<View key={index} style={styles.buttonWrapper}>
									<ButtonComponent
										key={index}
										selected={selectedPlayerIndex === index}
										text={player.name}
										action={() => setSelectedPlayerIndex(index)}
									/>
								</View>
							);
						}
					})}
				</ScrollView>
			</View>
		</ContainerComponent>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		height: "80%",
		justifyContent: "space-between",
	},
	title: {
		fontFamily: "BebasNeue_400Regular",
		fontSize: 48,
		color: "white",
		textAlign: "center",
	},
	playerContainer: {
		width: "100%",
	},
	buttonWrapper: {
		marginVertical: 10,
	},
});
