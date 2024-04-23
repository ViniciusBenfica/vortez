import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButtonProps {
	action?: () => void;
	text: string;
	disable?: boolean;
	selected?: boolean;
}

export default function TransparentButtonComponent({
	action,
	text,
	selected,
	disable = true,
}: IButtonProps) {
	return (
		<TouchableOpacity
			onPress={action}
			style={[styles.button, selected ? styles.selectedButton : null]}
			disabled={disable}
		>
			<Text style={styles.word}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#ffffff26",
		borderColor: "#FFFFFF",
		borderWidth: 2,
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	selectedButton: {
		backgroundColor: "red",
	},
	word: {
		fontFamily: "BebasNeue_400Regular",
		color: "#FFFFFF",
		fontSize: 64,
		textAlign: "center",
	},
});
