import { useStorePlayer } from "@/src/store/players";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import ContainerComponent from "../components/container";
import InputComponent from "../components/input";

export default function Result() {
	const { players, clearVotes, randomPlayer } = useStorePlayer();

	return (
		<ContainerComponent
			actionFooterButton={() => {
				router.push("/");
				clearVotes();
			}}
			textFooterButton="Jogar novamente"
		>
			<View style={styles.container}>
				<View style={styles.resultContainer}>
					<Text style={styles.title}>O mais votado foi </Text>
					<InputComponent
						editable={false}
						value={
							players.reduce((prev, current) =>
								prev.votes > current.votes ? prev : current,
							).name
						}
					/>
				</View>
				<View style={styles.resultContainer}>
					<Text style={styles.title}>Quem não sabia a palavra</Text>
					<InputComponent value={randomPlayer} editable={false} />
				</View>
			</View>
		</ContainerComponent>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		gap: 100,
		height: "80%",
	},
	title: {
		fontFamily: "BebasNeue_400Regular",
		fontSize: 48,
		color: "white",
		textAlign: "center",
	},
	resultContainer: {
		width: "100%",
	},
});
