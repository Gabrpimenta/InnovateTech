import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';
import store from 'src/store';
import StudentsScreen from 'src/screens/StudentsScreen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      if (!fontsLoaded) {
        try {
          await SplashScreen.preventAutoHideAsync(); // Use preventAutoHideAsync to prevent the splash screen from hiding automatically
          // Consider alternative strategies for font loading
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
        }
      }
    }

    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync(); // Hide the splash screen when the app is ready
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Return null while the app is not ready
  }

  return (
    <Provider store={store}>
      <StudentsScreen />
    </Provider>
  );
}
