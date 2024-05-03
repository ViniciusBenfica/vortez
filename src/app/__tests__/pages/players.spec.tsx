import Players from "@/app/pages/players";
import { useStorePlayer } from "@/store/players";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { router } from "expo-router";
import React from "react";

let mockPlayers = [{ id: 0, name: "", votes: 0 }];

jest.mock("@/store/players", () => ({
	useStorePlayer: () => ({
		players: mockPlayers,
		updatePlayer: jest.fn((name, index) => {
			if (name === "") {
				mockPlayers = mockPlayers.filter((_, i) => i !== index);
			} else {
				mockPlayers[index].name = name;
				if (mockPlayers[mockPlayers.length - 1]?.name !== "") {
					mockPlayers.push({
						id: mockPlayers[mockPlayers.length - 1].id + 1,
						name: "",
						votes: 0,
					});
				}
			}
		}),
		removePlayer: jest.fn((index) => {
			mockPlayers = mockPlayers.filter((_, i) => i !== index);
		}),
	}),
}));

jest.mock("expo-router", () => ({
	router: {
		push: jest.fn(),
	},
}));

describe("Players", () => {
	beforeEach(() => {
		mockPlayers = [{ id: 0, name: "", votes: 0 }];
		jest.clearAllMocks();
	});

	it("renders correctly", () => {
		const { getByText, getByPlaceholderText } = render(<Players />);
		expect(getByText("Lista de jogadores")).toBeTruthy();
		expect(getByPlaceholderText("Novo jogador")).toBeTruthy();
	});

	it("adds a new player when the last player name is not empty", async () => {
		const { findAllByPlaceholderText, rerender } = render(<Players />);
		const input = await findAllByPlaceholderText("Novo jogador");
		fireEvent.changeText(input[0], "John Doe");
		rerender(<Players />);

		await waitFor(async () => {
			const { findAllByPlaceholderText } = render(<Players />);
			const input = await findAllByPlaceholderText("Novo jogador");
			fireEvent.changeText(input[0], "Jane Doe");
		});

		expect(useStorePlayer().players[0].name).toBe("John Doe");
		expect(useStorePlayer().players[1].name).toBe("Jane Doe");
	});

	it("remove the first player", async () => {
		const { findAllByPlaceholderText, rerender, getByTestId } = render(<Players />);

		const input = await findAllByPlaceholderText("Novo jogador");
		fireEvent.changeText(input[0], "John Doe");
		rerender(<Players />);

		const iconButton = getByTestId("input-icon");

		fireEvent.press(iconButton);

		expect(useStorePlayer().players.length).toBe(1);
		expect(useStorePlayer().players[0].name).toBe("");
	});

	it("error when try navigates to /pages/theme when the start button is pressed", () => {
		const { getByText } = render(<Players />);
		const startButton = getByText("Começar");
		fireEvent.press(startButton);
		expect(router.push).not.toHaveBeenCalledWith("/pages/theme");
		const errorMessage = getByText("Precisa ter pelo menos 3 jogadores");
		expect(errorMessage).toBeTruthy();
	});

	it("navigates to /pages/theme when the start button is pressed if have more than 3 players", () => {
		const { getByText, rerender } = render(<Players />);
		mockPlayers = [
			{ id: 0, name: "", votes: 0 },
			{ id: 1, name: "", votes: 0 },
			{ id: 2, name: "", votes: 0 },
			{ id: 3, name: "", votes: 0 },
			{ id: 4, name: "", votes: 0 },
		];

		rerender(<Players />);
		const startButton = getByText("Começar");
		fireEvent.press(startButton);

		expect(router.push).toHaveBeenCalledWith("/pages/theme");
	});
});
