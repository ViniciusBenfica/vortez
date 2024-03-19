import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButtonProps {
	action: () => void;
	text: string;
}

export default function ButtonComponent({ action, text }: IButtonProps) {
	return (
		<TouchableOpacity onPress={action} style={styles.button}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderColor: "#D59018",
		borderWidth: 5,
		width: "100%",
		height: 110,
		borderRadius: 20,
	},
	buttonText: {
		fontSize: 64,
		color: "#D59018",
		fontFamily: "BebasNeue_400Regular",
	},
});
