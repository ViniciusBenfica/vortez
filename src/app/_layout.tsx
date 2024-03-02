import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='players/index' options={{ headerShown: false }} />
      <Stack.Screen name='getWord/index' options={{ headerShown: false }} />
      <Stack.Screen name='questions/index' options={{ headerShown: false }} />
    </Stack>
  );
}
