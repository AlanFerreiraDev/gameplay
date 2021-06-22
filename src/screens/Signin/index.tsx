import React from 'react';
//* Elementos nativos react-native
//* O StatusBar é um compoennte nativo par alidar com a barra de status do celular
import { View, Text, Image } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

//* Quando eu uso o export default, eu não posso importar com as chaves no arquivo que quero passar o componente
export function SignIn() {
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

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
