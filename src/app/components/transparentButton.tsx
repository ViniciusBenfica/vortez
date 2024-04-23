import { StyleSheet, TouchableOpacity } from "react-native";

interface IButtonProps {
	action?: () => void;
	disable?: boolean;
	children: React.ReactNode;
}

export default function TransparentButtonComponent({
	action,
	disable = true,
	children,
}: IButtonProps) {
	return (
		<TouchableOpacity onPress={action} style={[styles.button]} disabled={disable}>
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
});
