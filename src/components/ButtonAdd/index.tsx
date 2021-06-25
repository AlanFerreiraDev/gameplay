import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
//* Import de ícones do expo, não precisa instalar nada
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

//* Cmo vou ter um botão que não terá texto, eu posso passar as porps direto na função
export function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  );
}
