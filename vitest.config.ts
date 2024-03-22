import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import reactNative from "vitest-react-native";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [reactNative(), tsconfigPaths(), react()],
	test: {
		environment: "node",
	},
});
