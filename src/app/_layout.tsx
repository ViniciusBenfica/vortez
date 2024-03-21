import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		BebasNeue_400Regular,
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="pages/players/index"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="pages/getWord/index"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="pages/questions/index"
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="pages/votes/index" options={{ headerShown: false }} />
			<Stack.Screen
				name="pages/result/index"
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
