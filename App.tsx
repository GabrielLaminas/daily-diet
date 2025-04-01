import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { ThemeProvider } from "styled-components/native";
import theme from '@theme/index';
import Loading from '@components/Loading';
import Home from '@screens/Home';
import DietDetails from '@screens/DietDetails';
import Registration from '@screens/Registration';
import Feedback from '@screens/Feedback';
import InfoMeal from '@screens/InfoMeal';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        style="dark"
        backgroundColor='transparent'
        translucent 
      />
      { fontsLoaded ? <InfoMeal /> : <Loading />}
    </ThemeProvider>
  );
}
