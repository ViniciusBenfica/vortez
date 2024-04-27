import InputComponent from "@/app/components/input";
import { useStorePlayer } from "@/store/players";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ContainerComponent from "../components/container";

export default function Players() {
	const { players, updatePlayer, removePlayer } = useStorePlayer();

	return (
		<ContainerComponent
			actionFooterButton={() => router.push("/pages/theme")}
			textFooterButton="Começar"
		>
			<View style={styles.container}>
				<Text style={styles.title}>Lista de jogadores</Text>
				<ScrollView style={styles.playerContainer}>
					{players.map((player, index) => (
						<View key={player.id} style={styles.playerRow}>
							{players.length - 1 === index ? (
								<InputComponent
									placeholder={"Novo jogador"}
									value={player?.name}
									onChangeText={(text) => updatePlayer(text, index)}
								/>
							) : (
								<InputComponent
									value={player?.name}
									onChangeText={(text) => updatePlayer(text, index)}
									onPressIcon={() => removePlayer(index)}
									icon={require("../../../assets/icons/bin.svg")}
								/>
							)}
						</View>
					))}
				</ScrollView>
			</View>
		</ContainerComponent>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	title: {
		fontFamily: "BebasNeue_400Regular",
		fontSize: 48,
		color: "white",
	},
	playerContainer: {
		width: "100%",
	},
	playerRow: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: 16,
	},
});
