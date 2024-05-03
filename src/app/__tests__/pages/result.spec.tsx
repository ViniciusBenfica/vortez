import Result from "@/app/pages/result";
import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import React from "react";

jest.mock("expo-router", () => ({
	router: {
		push: jest.fn(),
	},
}));

jest.mock("@/store/players", () => ({
	useStorePlayer: () => ({
		players: [
			{ name: "Jogador 1", votes: 4 },
			{ name: "Jogador 2", votes: 2 },
			{ name: "Jogador 3", votes: 1 },
		],
		randomPlayer: "Jogador 3",
		clearVotes: jest.fn(),
	}),
}));

jest.mock("@/store/theme", () => ({
	useStoreTheme: () => ({
		cleanTheme: jest.fn(),
	}),
}));

describe("Result", () => {
	it("renders correctly", () => {
		const { getByText } = render(<Result />);
		expect(getByText("O mais votado foi")).toBeTruthy();
		expect(getByText("Quem não sabia a palavra")).toBeTruthy();
	});

	it("shows who got the most votes", () => {
		const { getByDisplayValue } = render(<Result />);
		expect(getByDisplayValue("Jogador 1")).toBeTruthy();
	});

	it("shows who doesn't know the word", () => {
		const { getByDisplayValue } = render(<Result />);
		expect(getByDisplayValue("Jogador 3")).toBeTruthy();
	});

	it("navigates on button press", () => {
		const { getByText } = render(<Result />);
		fireEvent.press(getByText("Reiniciar jogo"));
		expect(router.push).toHaveBeenCalledWith("/");
	});
});
