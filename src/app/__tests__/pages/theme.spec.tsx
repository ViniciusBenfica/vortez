import Theme from "@/app/pages/theme";
import { useStoreTheme } from "@/store/theme";
import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import React from "react";

const mockThemes = [
	{
		title: "Comida",
		theme: ["testeTheme"],
		icon: require("../../../../assets/icons/food.png"),
		questions: ["testeQuestion"],
	},
];

let mockSelectTheme = "";

jest.mock("expo-router", () => ({
	router: {
		push: jest.fn(),
	},
}));

jest.mock("@/store/theme", () => ({
	useStoreTheme: () => ({
		themes: mockThemes,
		setTheme: jest.fn(() => {
			mockSelectTheme = "Comida";
		}),
		selectTheme: mockSelectTheme,
	}),
}));

describe("Theme", () => {
	beforeEach(() => {
		mockSelectTheme = "";
	});

	it("renders correctly", () => {
		const { getByText } = render(<Theme />);
		expect(getByText("Selecionar tema")).toBeTruthy();
		expect(getByText("Começar")).toBeTruthy();
		expect(getByText("Comida")).toBeTruthy();
	});

	it("selects a theme correctly", () => {
		const { getAllByText } = render(<Theme />);
		const themeButton = getAllByText("Comida")[0];
		fireEvent.press(themeButton);
		expect(useStoreTheme().selectTheme).toBe("Comida");
	});

	it("navigates on button press", () => {
		const { getByText, getAllByText } = render(<Theme />);

		const themeButton = getAllByText("Comida")[0];
		fireEvent.press(themeButton);

		fireEvent.press(getByText("Começar"));
		expect(router.push).toHaveBeenCalledWith("/pages/getWord");
	});
});
