import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import ContainerComponent from "./components/container";

export default function App() {
	return (
		<ContainerComponent
			actionFooterButton={() => {
				router.push("/pages/players");
			}}
			textFooterButton="Jogar"
			withBackground={false}
		>
			<View style={styles.body}>
				<Image
					source={require("../../assets/images/logo.webp")}
					style={styles.image}
					testID="logo-image"
				/>
			</View>
		</ContainerComponent>
	);
}

const styles = StyleSheet.create({
	body: {
		height: "80%",
		width: "100%",
	},
	image: {
		width: "100%",
		height: "70%",
		resizeMode: "contain",
	},
});
