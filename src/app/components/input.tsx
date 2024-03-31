import {
	Image,
	type ImageSourcePropType,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

interface IInputProps {
	placeholder?: string;
	value: string;
	onChangeText?: (text: string) => void;
	icon?: ImageSourcePropType;
	onPressIcon?: () => void;
	editable?: boolean;
}

export default function InputComponent({
	placeholder,
	value,
	onChangeText,
	icon,
	onPressIcon,
	editable = true,
}: IInputProps) {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText ? (text) => onChangeText(text) : undefined}
				value={value}
				editable={editable}
				placeholder={placeholder || ""}
				placeholderTextColor="#A5A5A5"
			/>
			{icon && (
				<TouchableOpacity style={styles.button} testID="input-icon" onPress={onPressIcon}>
					<Image style={styles.icon} source={require("../../../assets/icons/bin.svg")} />
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#fff",
		borderColor: "#D59018",
		borderWidth: 5,
		borderRadius: 12,
		width: "100%",
	},
	input: {
		textAlign: "center",
		width: "100%",
		fontFamily: "BebasNeue_400Regular",
		fontSize: 40,
		color: "#01386B",
	},
	button: {
		position: "absolute",
		right: 5,
	},
	icon: {
		width: 34,
		height: 34,
	},
});
