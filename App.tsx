import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';

import { Loading } from '@components/Loading';
import { NewGroup } from "@screens/NewGroup";
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }); //Criação de um vetor com variável boleana,que observa se as fontes foram carregadas, para que a fonte esteja disponivel antes de aparecer a aplicação para o usuário 


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="trasparent"
        translucent
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}


