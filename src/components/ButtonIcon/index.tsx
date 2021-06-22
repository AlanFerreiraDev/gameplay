import React from 'react';
//* Esse botão lida melhor com os ocntextos dos tipos de aparelhos celulares, para IOS ele repsita mais as funções nativas, assim como no android
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
//* TouachebleOpacity é um elemento de click nativo
//* Pego o TouchableOpacityProps, para conseguir passar o activeOpacity por props no componente ButtonIcon
import { Text, Image, View } from 'react-native';

import Discording from '../../assets/discord.png';
import { styles } from './styles';

//* Vou criar um tipo e setar props para passar p Botão
//* Se title fosse opcional, eu poderia colocar com um condicional, title?: string, ou seja, o title poderia ser ou não string
//* Então aqui eu falo que Props recebe todas as propriedades de ToauchableOpacityProps e a que eu criei = title:string
type Props = RectButtonProperties & {
  title: string;
};

//* Passo como props p componente o title, e todo o restante das props que eu quiser, no nosso caso seria todas de TouchableOpacityProps
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    //* activeOpacity, controla o nível de oppacidade, e recupero o restante das props com o ...rest, para usar no botão
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Discording} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
