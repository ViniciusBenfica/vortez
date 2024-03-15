import { useStorePlayer } from "@/src/store/players";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import {
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export default function Players() {
	const { players, updatePlayer, removePlayer, addPlayer } = useStorePlayer();

	useEffect(() => {
		if (players[players.length - 1].name !== "") {
			addPlayer();
		}
	}, [players[players.length - 1].name]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Adicione os jogadores</Text>
			<ScrollView style={styles.playerContainer}>
				{players.map((player, index) => (
					<View key={index} style={styles.playerRow}>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								onChangeText={(text) => updatePlayer(text, index)}
								value={player.name}
								placeholder={"Novo jogador"}
							/>
							{players.length - 1 !== index && (
								<TouchableOpacity onPress={() => removePlayer(index)}>
									<Image
										style={styles.icon}
										source={require("../../../assets/icons/bin.png")}
									/>
								</TouchableOpacity>
							)}
						</View>
					</View>
				))}
			</ScrollView>
			<Link href="/getWord/" asChild>
				<Button title="Começar partida" color="#ff4444" />
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "space-around",
		paddingVertical: 50,
		flex: 1,
	},
	playerContainer: {
		width: "100%",
	},
	inputContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 2,
		borderColor: "#9966cc",
		padding: 10,
		borderRadius: 10,
	},
	icon: {
		width: 20,
		height: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: "90%",
		height: 40,
		// margin: 12,
	},
	playerRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "90%",
		alignSelf: "center",
		marginVertical: 10,
	},
});
