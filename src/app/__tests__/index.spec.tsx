import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import React from "react";
import App from "..";

jest.mock("expo-router", () => ({
	router: {
		push: jest.fn(),
	},
}));

describe("Index", () => {
	it("renders correctly", () => {
		const { getByText, getByTestId } = render(<App />);
		expect(getByText("Jogar")).toBeTruthy();
		expect(getByTestId("logo-image")).toBeTruthy();
	});
	it("navigates on button press", () => {
		const { getByText } = render(<App />);
		const button = getByText("Jogar");
		fireEvent.press(button);
		expect(router.push).toHaveBeenCalledWith("/pages/players/");
	});
});
