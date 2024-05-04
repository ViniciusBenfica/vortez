import Votes from "@/app/pages/votes";
import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import React from "react";

let mockPlayers = [
	{ name: "Jogador 1", votes: 0 },
	{ name: "Jogador 2", votes: 0 },
	{ name: "Jogador 3", votes: 0 },
];

jest.mock("expo-router", () => ({
	router: {
		push: jest.fn(),
	},
}));

jest.mock("@/store/players", () => ({
	useStorePlayer: () => ({
		votedPlayer: jest.fn((index) => {
			mockPlayers[index].votes += 1;
		}),
		players: mockPlayers,
	}),
}));

describe("Votes", () => {
	beforeEach(() => {
		mockPlayers = [
			{ name: "Jogador 1", votes: 0 },
			{ name: "Jogador 2", votes: 0 },
			{ name: "Jogador 3", votes: 0 },
		];
	});

	it("renders correctly", () => {
		const { getByText } = render(<Votes />);
		expect(getByText("Quem não sabe a palavra?")).toBeTruthy();
		expect(getByText("Jogador 1")).toBeTruthy();
	});

	it("allows votingy", () => {
		const { getByText } = render(<Votes />);
		expect(getByText("Quem não sabe a palavra?")).toBeTruthy();
		expect(getByText("Jogador 1")).toBeTruthy();
		fireEvent.press(getByText("Jogador 2"));
		expect(getByText("Confirmar")).toBeTruthy();
		fireEvent.press(getByText("Confirmar"));
		expect(mockPlayers[1].votes).toBe(1);
	});

	it("navigates on button press", () => {
		const { getByText } = render(<Votes />);
		mockPlayers = [
			{ name: "Jogador 1", votes: 0 },
			{ name: "Jogador 2", votes: 0 },
		];
		fireEvent.press(getByText("Jogador 2"));
		expect(getByText("Confirmar")).toBeTruthy();
		fireEvent.press(getByText("Confirmar"));
		expect(router.push).toHaveBeenCalledWith("/pages/result");
	});
});
