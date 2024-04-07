import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import ButtonComponent from "./components/button";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Image
					source={require("../../assets/images/logo.webp")}
					style={styles.image}
					testID="logo-image"
				/>
				<ButtonComponent action={() => router.push("/pages/players")} text="Jogar" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#01386B",
	},
	body: {
		height: "80%",
		width: "90%",
		justifyContent: "space-between",
		margin: "auto",
	},
	image: {
		width: "100%",
		height: "70%",
		resizeMode: "contain",
	},
});
