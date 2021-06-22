import React from 'react';
import { useNavigation } from '@react-navigation/native';

import IlustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

//* Elementos nativos react-native
import { View, Text, Image } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

//* Quando eu uso o export default, eu não posso importar com as chaves no arquivo que quero passar o componente
export function SignIn() {
  const navigation = useNavigation();

  //* Função pár amudança de página
  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image
        source={IlustrationImg}
        style={styles.image}
        // *Para ajustar a imagem ao plano de fundo
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'} jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'} favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
  );
}
