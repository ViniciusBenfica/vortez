import GetWord from "@/app/pages/getWord";
import { useStorePlayer } from "@/store/players";
import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import React from "react";

let mockRandomPlayer = "Jogador 3";
let mockPlayers = [{ name: "Jogador 1" }, { name: "Jogador 2" }];

jest.mock("expo-router", () => ({
	router: {
		push: jest.fn(),
	},
}));

jest.mock("@/questions/foods", () => ({
	foodsName: ["banana"],
}));

jest.mock("@/store/players", () => ({
	useStorePlayer: () => ({
		getRandomPlayer: jest.fn(),
		randomPlayer: mockRandomPlayer,
		players: mockPlayers,
	}),
}));

describe("GetWord", () => {
	beforeEach(() => {
		mockRandomPlayer = "Jogador 3";
		mockPlayers = [{ name: "Jogador 1" }, { name: "Jogador 2" }];
	});

	it("renders correctly", () => {
		const { getByText } = render(<GetWord />);
		expect(getByText(`Voce é o ${useStorePlayer().players[0].name}?`)).toBeTruthy();
		expect(getByText("Sim, sou eu!")).toBeTruthy();
	});

	it("show word when player is not random", async () => {
		const { getByText } = render(<GetWord />);
		expect(getByText(`Voce é o ${useStorePlayer().players[0].name}?`)).toBeTruthy();
		fireEvent.press(getByText("Sim, sou eu!"));
		expect(getByText("A palavra é")).toBeTruthy();
		expect(getByText("banana")).toBeTruthy();
	});

	it("show word when player is random", async () => {
		mockRandomPlayer = "Jogador 1";
		const { getByText } = render(<GetWord />);
		expect(getByText(`Voce é o ${useStorePlayer().players[0].name}?`)).toBeTruthy();
		fireEvent.press(getByText("Sim, sou eu!"));
		expect(getByText("A palavra é")).toBeTruthy();
		expect(getByText("Não sabe")).toBeTruthy();
	});

	it("navigates on button press", () => {
		const { getByText } = render(<GetWord />);
		fireEvent.press(getByText("Sim, sou eu!"));
		fireEvent.press(getByText("Continuar"));
		expect(router.push).toHaveBeenCalledWith("/pages/questions");
	});
});
