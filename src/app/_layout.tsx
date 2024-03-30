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
			<Stack.Screen name="pages/players" options={{ headerShown: false }} />
			<Stack.Screen name="pages/getWord" options={{ headerShown: false }} />
			<Stack.Screen name="pages/questions" options={{ headerShown: false }} />
			<Stack.Screen name="pages/votes" options={{ headerShown: false }} />
			<Stack.Screen name="pages/result" options={{ headerShown: false }} />
		</Stack>
	);
}
