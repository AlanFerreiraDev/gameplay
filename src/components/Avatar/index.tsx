import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

// * Como vou usar essa imagem em muitos lugares,vou definir um type p ela
type Props = {
  urlImage: string;
};

//* Falo que toda imagem tem que ter um urlImage, no formato de string
export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
