import React from 'react';
//* TouachebleOpacity é um elemento de click nativo
//* Pego o TouchableOpacityProps, para conseguir passar o activeOpacity por props no componente ButtonIcon
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import Discording from '../../assets/discord.png';
import { styles } from './styles';

//* Vou criar um tipo e setar props para passar p Botão
//* Se title fosse opcional, eu poderia colocar com um condicional, title?: string, ou seja, o title poderia ser ou não string
//* Então aqui eu falo que Props recebe todas as propriedades de ToauchableOpacityProps e a que eu criei = title:string
type Props = TouchableOpacityProps & {
  title: string;
};

//* Passo como props p componente o title, e todo o restante das props que eu quiser, no nosso caso seria todas de TouchableOpacityProps
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    //* activeOpacity, controla o nível de oppacidade, e recupero o restante das props com o ...rest, para usar no botão
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Discording} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
