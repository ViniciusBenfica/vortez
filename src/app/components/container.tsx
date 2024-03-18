import { Image, StyleSheet, View } from "react-native";
import ButtonComponent from "./button";

type IContainerProps = {
	children: React.ReactNode;
	actionFooterButton: () => void;
	textFooterButton: string;
};

export default function ContainerComponent({
	children,
	actionFooterButton,
	textFooterButton,
}: IContainerProps) {
	return (
		<View style={styles.container}>
			<View style={styles.containerImage}>
				<Image
					style={styles.image}
					source={require("../../../assets/images/logo.webp")}
				/>
			</View>
			<View style={styles.body}>
				{children}
				<View style={styles.footerButton}>
					<ButtonComponent
						action={actionFooterButton}
						text={textFooterButton}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	containerImage: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		backgroundColor: "#01386B",
	},
	body: {
		height: "80%",
		width: "100%",
		justifyContent: "space-between",
		margin: "auto",
	},
	image: {
		opacity: 0.1,
		transform: [{ rotate: "-15deg" }],
		zIndex: -1,
	},
	footerButton: {
		alignItems: "center",
	},
});
