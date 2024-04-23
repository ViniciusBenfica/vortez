import { theme } from "@/questions";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ContainerComponent from "../components/container";
import TransparentButtonComponent from "../components/transparentButton";

export default function Theme() {
	return (
		<ContainerComponent
			actionFooterButton={() => router.push("/pages/getWord")}
			textFooterButton="Começar"
		>
			<View style={styles.container}>
				<Text style={styles.title}>Selecionar tema</Text>
				<View style={styles.themeContainer}>
					{theme.map((theme, index) => (
						<View key={index} style={styles.themeRow}>
							<TransparentButtonComponent text={theme.title} />
						</View>
					))}
				</View>
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
	themeContainer: {
		display: "flex",
		justifyContent: "center",
		gap: 16,
		flexWrap: "wrap",
		flexDirection: "row",
		width: "100%",
	},
	themeRow: {
		width: "40%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: 16,
	},
});
