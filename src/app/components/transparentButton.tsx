import { StyleSheet, TouchableOpacity } from "react-native";

interface IButtonProps {
	action?: () => void;
	disable?: boolean;
	selected?: boolean;
	children: React.ReactNode;
}

export default function TransparentButtonComponent({
	action,
	disable = true,
	children,
	selected,
}: IButtonProps) {
	return (
		<TouchableOpacity onPress={action} style={[styles.button, selected ? styles.selectedButton : null]} disabled={disable}>
			{children}
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
		borderColor: "#D59018",
	}
});
