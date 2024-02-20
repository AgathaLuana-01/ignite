import { ActivityIndicator } from 'react-native'; //Componente de Load
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { Groups } from "@screens/Groups";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }); //Criação de um vetor com variável boleana,que observa se as fontes foram carregadas, para que a fonte esteja disponivel antes de aparecer a aplicação para o usuário 


  return (
    <ThemeProvider theme={theme}> 
      {fontsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}


