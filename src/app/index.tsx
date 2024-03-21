import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import ButtonComponent from "./components/button";

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require("../../assets/images/logo.webp")}
					style={styles.image}
				/>
			</View>
			<ButtonComponent
				action={() => router.push("/pages/players/")}
				text="Jogar"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#01386B",
		height: "100%",
		width: "100%",
		justifyContent: "space-around",
	},
	image: {
		width: 300,
		height: 300,
	},
});
