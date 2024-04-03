import GetWord from "@/app/pages/getWord";
import { useStorePlayer } from "@/store/players";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

// jest.mock("expo-router", () => ({
// 	router: {
// 		push: jest.fn(),
// 	},
// }));

jest.mock("@/store/players", () => ({
	useStorePlayer: () => ({
		getRandomPlayer: jest.fn(),
		randomPlayer: "Jogador 1",
		players: [{ name: "Jogador 1" }, { name: "Jogador 2" }],
	}),
}));

describe("GetWord", () => {
	it("renders correctly", () => {
		const { getByText } = render(<GetWord />);
		expect(getByText(`Voce é o ${useStorePlayer().players[0].name}?`)).toBeTruthy();
		fireEvent.press(getByText("Sim, sou eu!"));
	});

	it("renders correctly when have interaction", async () => {
		const { getByText, queryByText } = render(<GetWord />);
		expect(getByText(`Voce é o ${useStorePlayer().players[0].name}?`)).toBeTruthy();
		fireEvent.press(getByText("Sim, sou eu!"));
		expect(queryByText("A palavra é")).toBeTruthy();
	});
});
