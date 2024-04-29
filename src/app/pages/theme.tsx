import { theme } from "@/questions";
import { useStoreTheme } from "@/store/theme";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ContainerComponent from "../components/container";
import TransparentButtonComponent from "../components/transparentButton";

export default function Theme() {
	const [selectedThemeIndex, setSelectedThemeIndex] = useState<number>(-1);
	const { setTheme, selectTheme } = useStoreTheme();

	return (
		<ContainerComponent
			actionFooterButton={() => {
				if (selectTheme) return router.push("/pages/getWord");
			}}
			textFooterButton="Começar"
		>
			<Text style={styles.title}>Selecionar tema</Text>
			<View style={styles.themeContainer}>
				{theme.map((theme, index) => (
					<View key={index} style={styles.themeRow}>
						<TransparentButtonComponent
							action={() => {
								setSelectedThemeIndex(index);
								setTheme(theme?.title);
							}}
							disable={false}
							selected={selectedThemeIndex === index}
						>
							<Image style={styles.image} source={theme.icon} />
							<Text
								style={[
									styles.themeTitle,
									selectedThemeIndex === index ? styles.themeSelected : null,
								]}
							>
								{theme.title}
							</Text>
						</TransparentButtonComponent>
					</View>
				))}
			</View>
		</ContainerComponent>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: "BebasNeue_400Regular",
		fontSize: 48,
		color: "white",
		textAlign: "center",
	},
	themeTitle: {
		fontFamily: "BebasNeue_400Regular",
		fontSize: 24,
		color: "white",
	},
	themeSelected: {
		color: "#D59018",
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
		height: 130,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: 16,
	},
	image: {
		width: 70,
		height: 70,
		marginBottom: 8,
	},
});
