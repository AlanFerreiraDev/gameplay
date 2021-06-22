import React from 'react';
//* O StatusBar é um compoennte nativo par alidar com a barra de status do celular
//* E para conseguir deixar a barra da cor do background de fundo
import { StatusBar } from 'react-native';
//* Toda vez que eu for importar algum compoennte que ue criei com chaves, eu preciso dar o export sem default
import { Routes } from './src/routes';
//* Melhor lugar para instalar as fontes, pq toda vez que rodar o projeto ele vai subir as fontes
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

//* Componente de Loading instalado da documentação do expo, esse componente segura a tela de splash
import AppLoading from 'expo-app-loading';
import { Background } from './src/components/Background';

export default function App() {
  // * Enquanto as fontes não carregarem, não carregar o app
  //* O useFonts retorna na primeira posição um booleano, então dá p saber quando as fontes forem carregadas
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
